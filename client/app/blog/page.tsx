import InsightHero from "../components/insight/InsightHero";
import FeaturedInsight from "../components/insight/FeaturedInsight";
import ExploreTopics from "../components/insight/ExploreTopics";
import LatestInsights from "../components/insight/LatestInsights";
import NewsletterCTA from "../components/insight/NewsletterCTA";

export default function InsightPage() {
  return (
    <>
            <main className="min-h-screen bg-white">
        <InsightHero />
        <FeaturedInsight />
        <ExploreTopics />
        <LatestInsights />
        <NewsletterCTA />
      </main>
          </>
  );
}
