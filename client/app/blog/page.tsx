import Header from "../components/header";
import Footer from "../components/footer";
import BlogHero from "../components/blog/BlogHero";
import FeaturedInsight from "../components/blog/FeaturedInsight";
import ExploreTopics from "../components/blog/ExploreTopics";
import LatestInsights from "../components/blog/LatestInsights";
import NewsletterCTA from "../components/blog/NewsletterCTA";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <BlogHero />
        <FeaturedInsight />
        <ExploreTopics />
        <LatestInsights />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
