import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Features from '../components/Features';
import GadgetListing from '../components/GadgetListing';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Features />
      <GadgetListing />
      <ContactForm />
    </>
  );
}