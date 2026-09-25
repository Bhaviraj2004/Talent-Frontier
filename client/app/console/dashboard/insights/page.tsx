/*
==========================================================================
  INSIGHT ADMIN PANEL - COMMENTED OUT
  This entire page has been disabled as per requirement.
  To re-enable, uncomment the code below.
==========================================================================
*/

/*
"use client";

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Plus, Image as ImageIcon, Loader2, Search, Trash2, Edit2, CheckCircle2, CircleDashed, X, UploadCloud, FileText, Calendar, Clock, ArrowLeft, Star, Flame, Tag } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false, 
  loading: () => <div className="h-64 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-lg text-slate-400 font-medium text-sm">Loading Editor...</div>
});
import 'react-quill-new/dist/quill.snow.css';

// Quill Modules Configuration
const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'clean']
  ],
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'list',
  'link'
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function InsightsPage() {
  const [insights, setInsights] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchInsights();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = Cookies.get('admin_token');
      const res = await axios.get(`${API_URL}/api/categories`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setCategories(res.data.categories);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;
    try {
      const token = Cookies.get('admin_token');
      const res = await axios.post(`${API_URL}/api/categories`, { name: newCategoryName }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setCategories([...categories, res.data.category].sort((a: any, b: any) => a.name.localeCompare(b.name)));
        setCategoryId(res.data.category.id);
        setIsCreatingCategory(false);
        setNewCategoryName('');
      }
    } catch (error) {
      console.error("Failed to create category", error);
      alert("Failed to create category");
    }
  };

  const fetchInsights = async () => {
    try {
      const token = Cookies.get('admin_token');
      const res = await axios.get(`${API_URL}/api/insights`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.data.success) {
        setInsights(res.data.insights);
      }
    } catch (error) {
      console.error("Failed to fetch insights", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSubmit = async () => {
    if (!title) {
      alert("Please provide a title.");
      return;
    }
    if (!content || content === '<p><br></p>') {
      alert("Content body cannot be empty.");
      return;
    }
    
    setSubmitting(true);
    try {
      let finalImageUrl = null;
      
      if (imageFile) {
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
        const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'unsigned_preset';
        
        const imgData = new FormData();
        imgData.append('file', imageFile);
        imgData.append('upload_preset', uploadPreset);
        
        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, 
          imgData
        );
        finalImageUrl = uploadRes.data.secure_url;
      }

      const token = Cookies.get('admin_token');
      const payload = {
        title,
        description,
        content,
        published: String(published),
        isFeatured: String(isFeatured),
        isRecommended: String(isRecommended),
        categoryId,
        imageUrl: finalImageUrl
      };

      await axios.post(`${API_URL}/api/insights`, payload, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      setIsModalOpen(false);
      resetForm();
      fetchInsights();
    } catch (error) {
      console.error("Failed to create insight", error);
      alert("Failed to create insight. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this insight?')) return;
    try {
      const token = Cookies.get('admin_token');
      await axios.delete(`${API_URL}/api/insights/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchInsights();
    } catch (error) {
      console.error("Failed to delete insight", error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setContent('');
    setPublished(false);
    setIsFeatured(false);
    setIsRecommended(false);
    setCategoryId('');
    setIsCreatingCategory(false);
    setNewCategoryName('');
    setImageFile(null);
  };

  const handleToggleFlag = async (id: string, flag: string, currentValue: boolean) => {
    try {
      const token = Cookies.get('admin_token');
      await axios.patch(`${API_URL}/api/insights/${id}/toggle`, {
        flag,
        value: !currentValue
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchInsights();
    } catch (error) {
      console.error(`Failed to toggle ${flag}`, error);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      ...entire JSX...
    </div>
  );
}
*/

// Placeholder export while Insight Admin Panel is disabled
export default function InsightsPage() {
  return null;
}
