import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CreateNewJobPage() {
  const [title, setTitle] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleGenerateDescription = () => {
    // Simulate AI-generated description
    const dummyDescription = `We are looking for a ${experienceLevel} ${title} with skills in ${skills}. The role involves collaborating with a team to deliver high-quality software.`;
    setDescription(dummyDescription);
  };

  const handleSaveJob = () => {
    // Add your save logic here (e.g., API call)
    console.log('Job saved:', { title, experienceLevel, skills, description });
    navigate('/dashboard/recruiter/jobs'); // Redirect after saving
  };

  return (
    <div className="mx-auto mt-16 flex w-3/5 flex-col gap-6">
      <h1 className="text-2xl font-bold">Create a New Job</h1>
      <h2 className="text-lg text-gray-600">Let Our AI Work For You</h2>

      <Card className="border-primary-500">
        <CardContent>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1">Job Title:</label>
            <Input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter job title" 
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-1">Experience Level:</label>
            <Input 
              type="text" 
              value={experienceLevel} 
              onChange={(e) => setExperienceLevel(e.target.value)} 
              placeholder="Enter experience level" 
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-1">Skills:</label>
            <Input 
              type="text" 
              value={skills} 
              onChange={(e) => setSkills(e.target.value)} 
              placeholder="Enter skills" 
            />
          </div>
        </CardContent>
      </Card>


      <Card className="border-primary-500">
      <Button 
            className="mb-4 bg-primary-500 hover:bg-primary-400 text-primary-100"
            onClick={handleGenerateDescription}
          >
            Generate Description
          </Button>
        <CardHeader className="bg-primary-500 text-primary-100">
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="AI-generated job description will appear here..." 
            rows={5}
          />
        </CardContent>
      </Card>

      <div className="flex justify-end mt-6">
        <Button 
          className="bg-green-500 hover:bg-green-400 text-primary-100"
          onClick={handleSaveJob}
        >
          Save Job
        </Button>
      </div>
    </div>
  );
}
