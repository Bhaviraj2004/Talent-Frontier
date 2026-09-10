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
      const res = await axios.get('http://localhost:5000/api/categories', {
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
      const res = await axios.post('http://localhost:5000/api/categories', { name: newCategoryName }, {
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
      const res = await axios.get('http://localhost:5000/api/insights', {
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

      await axios.post('http://localhost:5000/api/insights', payload, {
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
      await axios.delete(`http://localhost:5000/api/insights/${id}`, {
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
      await axios.patch(`http://localhost:5000/api/insights/${id}/toggle`, {
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
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Insights Registry</h2>
          <p className="text-[13px] text-slate-500 mt-1 font-medium">Manage and publish content pieces.</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by title..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] shadow-sm transition-all placeholder:text-slate-400"
            />
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#005B82] hover:bg-[#004a69] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold flex items-center transition-colors shadow-sm whitespace-nowrap"
          >
            <Plus className="w-[18px] h-[18px] mr-1.5" />
            New Insight
          </button>
        </div>
      </div>

      {/* Insights List */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        {loading ? (
          <div className="py-24 text-center text-slate-500 flex flex-col items-center">
            <Loader2 className="w-8 h-8 animate-spin mb-4 text-[#005B82]" />
            <p className="text-sm font-medium">Fetching repository data...</p>
          </div>
        ) : insights.length === 0 ? (
          <div className="py-24 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <FileText className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-slate-900 font-bold mb-1 text-lg">No Insights Found</h3>
            <p className="text-sm text-slate-500 font-medium">Create your first piece of content to get started.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#fafbfc] border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  <th className="px-6 py-4">Title & Media</th>
                  <th className="px-6 py-4 w-[150px]">Status</th>
                  <th className="px-6 py-4 w-[150px]">Date Created</th>
                  <th className="px-6 py-4 w-[100px] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-[13px]">
                {insights.map((insight: any) => (
                  <tr key={insight.id} className="hover:bg-[#fcfdfd] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-slate-50 rounded-lg object-cover flex items-center justify-center overflow-hidden border border-slate-100 shrink-0 mt-1">
                          {insight.imageUrl ? (
                            <img src={insight.imageUrl} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-slate-300" />
                          )}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 group-hover:text-[#005B82] transition-colors line-clamp-1">{insight.title}</span>
                          {insight.description && (
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 max-w-md leading-relaxed">{insight.description}</p>
                          )}
                          {insight.category && (
                            <div className="mt-2 inline-flex items-center space-x-1 text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                              <Tag className="w-3 h-3" />
                              <span>{insight.category.name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {insight.published ? (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-[#eef4f8] text-[#005B82] rounded-full text-[11px] font-bold tracking-wide border border-[#d6e5ef]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>PUBLISHED</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-slate-50 text-slate-500 rounded-full text-[11px] font-bold tracking-wide border border-slate-200">
                          <CircleDashed className="w-3.5 h-3.5" />
                          <span>DRAFT</span>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      {new Date(insight.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {/* Quick Action Toggles */}
                        <div className="flex items-center space-x-1 mr-4">
                          <button 
                            onClick={() => handleToggleFlag(insight.id, 'isFeatured', insight.isFeatured)}
                            title={insight.isFeatured ? "Remove Featured Status" : "Mark as Featured"}
                            className={`p-1.5 rounded-md transition-colors ${insight.isFeatured ? 'text-amber-500 bg-amber-50 border border-amber-200' : 'text-slate-300 hover:text-amber-500 hover:bg-slate-50'}`}
                          >
                            <Star className={`w-[14px] h-[14px] ${insight.isFeatured ? 'fill-amber-500' : ''}`} />
                          </button>
                          <button 
                            onClick={() => handleToggleFlag(insight.id, 'isRecommended', insight.isRecommended)}
                            title={insight.isRecommended ? "Remove Recommended Status" : "Mark as Recommended"}
                            className={`p-1.5 rounded-md transition-colors ${insight.isRecommended ? 'text-rose-500 bg-rose-50 border border-rose-200' : 'text-slate-300 hover:text-rose-500 hover:bg-slate-50'}`}
                          >
                            <Flame className={`w-[14px] h-[14px] ${insight.isRecommended ? 'fill-rose-500' : ''}`} />
                          </button>
                        </div>

                        {/* Standard Actions */}
                        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 text-slate-400 hover:text-[#005B82] hover:bg-[#eef4f8] rounded-lg transition-colors">
                            <Edit2 className="w-[16px] h-[16px]" />
                          </button>
                          <button 
                            onClick={() => handleDelete(insight.id)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-[16px] h-[16px]" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 
        ========================================================
        LIVE PREVIEW CREATOR MODAL 
        Mirrors the layout of hardinsight/page.tsx
        ========================================================
      */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#f8fafd] overflow-y-auto animate-in fade-in duration-300 font-sans">
          
          {/* Editor Top Bar (Fixed) */}
          <div className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => { setIsModalOpen(false); resetForm(); }}
                className="flex items-center text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Exit Editor
              </button>
              <div className="h-4 w-px bg-gray-300"></div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {published ? 'Publishing Mode' : 'Draft Mode'}
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleCreateSubmit}
                disabled={submitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-[13px] font-bold transition-colors flex items-center shadow-sm disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-[18px] h-[18px] animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  published ? 'Save & Publish Live' : 'Save as Draft'
                )}
              </button>
            </div>
          </div>

          <div className="pt-16 pb-24">
            {/* 1. Editor Hero Section (Mirrors Insight Hero) */}
            <section className="bg-[#0b162c] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Hero Text Content */}
                <div>
                  <div className="flex items-center text-sm text-gray-400 mb-8 space-x-2">
                    <span className="opacity-50">Home / Insight / </span>
                    <span className="text-gray-200 border-b border-dashed border-gray-600">Dynamic Title Preview</span>
                  </div>

                  <div className="inline-flex items-center space-x-2 bg-blue-900/40 border border-blue-800 rounded-full px-4 py-1.5 mb-8">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Preview Mode</span>
                  </div>

                  {/* Title Input - Styled as Hero H1 */}
                  <textarea 
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                    placeholder="Enter Insight Title Here..."
                    className="w-full bg-transparent text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white placeholder-gray-600 outline-none resize-none border-none focus:ring-0 p-0"
                    rows={2}
                    style={{ overflow: 'hidden' }}
                  />

                  <div className="flex flex-wrap items-center text-sm text-gray-400 gap-6 mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">TF</div>
                      <span className="text-gray-200">Talent Frontier Insights</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>

                {/* Hero Image Upload Area */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border-2 border-dashed border-gray-700 bg-gray-800/30 flex items-center justify-center group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) setImageFile(e.target.files[0]);
                    }}
                  />
                  {imageFile ? (
                    <>
                      <Image src={URL.createObjectURL(imageFile)} alt="Preview" fill className="object-cover opacity-90 group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <span className="bg-white/10 backdrop-blur-md text-white font-semibold px-4 py-2 rounded-lg border border-white/20">Replace Image</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 border border-gray-700 group-hover:border-blue-500 transition-colors">
                        <ImageIcon className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <p className="text-gray-300 font-bold text-lg mb-1">Click to add Cover Image</p>
                      <p className="text-gray-500 text-sm">Will appear perfectly in this space</p>
                    </div>
                  )}
                </div>

              </div>
            </section>

            {/* 2. Main Content & Sidebar */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* Main Article (Rich Text Editor) */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[800px]">
                  
                  {/* Custom Toolbar Styling directly targeting Quill */}
                  <div className="flex-1 flex flex-col">
                    <ReactQuill 
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      modules={quillModules}
                      formats={quillFormats}
                      className="flex-1 flex flex-col live-preview-editor"
                      placeholder="Start writing your article... (Style matches the final insight exactly)"
                    />
                  </div>
                  
                  {/* Global CSS injected specifically for this editor to match the insight */}
                  <style jsx global>{`
                    .live-preview-editor .ql-toolbar {
                      border: none !important;
                      border-bottom: 1px solid #f1f5f9 !important;
                      background-color: #fafbfc;
                      padding: 16px !important;
                      position: sticky;
                      top: 64px;
                      z-index: 40;
                    }
                    .live-preview-editor .ql-container {
                      border: none !important;
                      flex: 1;
                      font-family: inherit !important;
                    }
                    .live-preview-editor .ql-editor {
                      padding: 48px !important;
                      color: #374151; /* gray-700 */
                      font-size: 1.125rem !important; /* text-lg */
                      line-height: 1.8 !important; /* leading-relaxed */
                      min-height: 500px;
                    }
                    .live-preview-editor .ql-editor h1,
                    .live-preview-editor .ql-editor h2,
                    .live-preview-editor .ql-editor h3 {
                      color: #111827; /* gray-900 */
                      font-weight: 700;
                      margin-top: 2.5rem;
                      margin-bottom: 1.5rem;
                    }
                    .live-preview-editor .ql-editor h1 { font-size: 2.25rem; }
                    .live-preview-editor .ql-editor h2 { font-size: 1.5rem; }
                    .live-preview-editor .ql-editor p {
                      margin-bottom: 1.5rem;
                    }
                    .live-preview-editor .ql-editor.ql-blank::before {
                      color: #cbd5e1; /* slate-300 */
                      font-style: normal;
                      left: 48px;
                    }
                  `}</style>
                </div>

                {/* Sidebar (Settings Area) */}
                <div className="lg:col-span-1 space-y-8 sticky top-24">
                  
                  {/* Description Box */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center">
                        <span className="w-4 h-[2px] bg-blue-500 mr-2"></span> ARTICLE SUMMARY
                      </h3>
                    </div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description</label>
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all placeholder:text-gray-400"
                      placeholder="This text appears on the main insight listing page and in SEO meta tags..."
                    />

                    {/* Category Selection */}
                    <div className="mt-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                      {!isCreatingCategory ? (
                        <div className="flex space-x-2">
                          <select 
                            value={categoryId} 
                            onChange={(e) => setCategoryId(e.target.value)}
                            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          >
                            <option value="">Select a category...</option>
                            {categories.map((cat: any) => (
                              <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                          </select>
                          <button 
                            onClick={() => setIsCreatingCategory(true)}
                            className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors flex items-center justify-center border border-gray-200"
                            title="Add new category"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          <input 
                            type="text"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            placeholder="New category name"
                            className="flex-1 px-4 py-3 bg-gray-50 border border-blue-300 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            autoFocus
                          />
                          <button 
                            onClick={handleCreateCategory}
                            className="px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm text-sm"
                          >
                            Add
                          </button>
                          <button 
                            onClick={() => { setIsCreatingCategory(false); setNewCategoryName(''); }}
                            className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors border border-gray-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Publishing Status Card */}
                  <div className="bg-[#0b162c] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl border border-blue-900/50">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                    <div className="relative z-10">
                      <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Visibility</h4>
                      <h3 className="text-xl font-bold mb-6 leading-tight">Publishing Settings</h3>
                      
                      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 mb-8 space-y-5">
                        
                        {/* Publish Toggle */}
                        <div className="flex items-start space-x-4">
                          <div className="relative flex items-center mt-0.5">
                            <input 
                              type="checkbox" 
                              id="live-publish" 
                              checked={published}
                              onChange={(e) => setPublished(e.target.checked)}
                              className="peer sr-only"
                            />
                            <div className="w-10 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                          </div>
                          <div>
                            <label htmlFor="live-publish" className="text-[13px] font-bold text-white cursor-pointer block mb-0.5">
                              Publish to Live Site
                            </label>
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                              If toggled on, hitting save will instantly make this post visible to the public.
                            </p>
                          </div>
                        </div>

                        {/* Featured Toggle */}
                        <div className="flex items-start space-x-4 pt-4 border-t border-gray-700/50">
                          <div className="relative flex items-center mt-0.5">
                            <input 
                              type="checkbox" 
                              id="is-featured" 
                              checked={isFeatured}
                              onChange={(e) => setIsFeatured(e.target.checked)}
                              className="peer sr-only"
                            />
                            <div className="w-10 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                          </div>
                          <div>
                            <label htmlFor="is-featured" className="text-[13px] font-bold text-white cursor-pointer block mb-0.5 flex items-center">
                              Mark as Featured <Star className="w-3 h-3 ml-1.5 text-amber-500" />
                            </label>
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                              Display prominently on the homepage and at the top of the insight list.
                            </p>
                          </div>
                        </div>

                        {/* Recommended Toggle */}
                        <div className="flex items-start space-x-4 pt-4 border-t border-gray-700/50">
                          <div className="relative flex items-center mt-0.5">
                            <input 
                              type="checkbox" 
                              id="is-recommended" 
                              checked={isRecommended}
                              onChange={(e) => setIsRecommended(e.target.checked)}
                              className="peer sr-only"
                            />
                            <div className="w-10 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-500"></div>
                          </div>
                          <div>
                            <label htmlFor="is-recommended" className="text-[13px] font-bold text-white cursor-pointer block mb-0.5 flex items-center">
                              Mark as Recommended <Flame className="w-3 h-3 ml-1.5 text-rose-500" />
                            </label>
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                              Show this post in the "Related/Recommended" section of other articles.
                            </p>
                          </div>
                        </div>

                      </div>

                      <button 
                        onClick={handleCreateSubmit}
                        disabled={submitting}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center disabled:opacity-50"
                      >
                        {submitting ? 'Processing...' : (published ? 'Publish Now' : 'Save Draft')} <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>

          </div>
        </div>
      )}
    </div>
  );
}
