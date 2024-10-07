import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function Banner() {
  return (
    <Container>
      <div className="my-10 rounded-lg bg-secondary-800 p-4 py-10">
        <h1 className="text-5xl font-semibold leading-tight text-white">Recruiter, Looking for applicants?</h1>
        <h1 className="mt-2 text-5xl font-semibold leading-tight text-white">
          Job Seeker, Searching for job Vacancies?
        </h1>
        <p className="mt-4 leading-relaxed text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, officiis.
        </p>
        <Button className="mt-4 bg-secondary-500 hover:bg-secondary-400">Start your journey here!</Button>
      </div>
    </Container>
  );
}
