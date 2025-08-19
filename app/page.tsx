import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
      <main>
          <h1 className="text-2l underline">Popular Companions</h1>

          <section className="home-section">
              <CompanionCard
              id="123"
              name="zlczlc"
              topic="zzz"
              subject="science"
              duration={10}
              color="#123123"
              />
              <CompanionCard
                  id="123"
                  name="zlczlc"
                  topic="zzz"
                  subject="science"
                  duration={10}
                  color="#123123"
              />
              <CompanionCard
                  id="123"
                  name="zlczlc"
                  topic="zzz"
                  subject="science"
                  duration={10}
                  color="#123123"
              />

          </section>

          <section className="home-section">
              <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"

              />
              <CTA />
          </section>
      </main>

  )
}

export default Page