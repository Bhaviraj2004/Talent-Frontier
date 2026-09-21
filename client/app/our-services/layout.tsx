import React from 'react';
import GlobalCTA from '../components/Services/GlobalCTA';

export default function TalentSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <GlobalCTA />
    </>
  );
}
