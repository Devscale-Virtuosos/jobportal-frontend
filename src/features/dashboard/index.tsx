import pdfToText from 'react-pdftotext';
import { useAuth } from '@/components/shared/auth-provider';

export default function DashboardPage() {
  const { user } = useAuth();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files) return;

      const pdfFile = e.target.files[0];

      const text = await pdfToText(pdfFile);
      console.log({ text });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome {user?.name}!</h1>
      <input name="file1" type="file" accept=".pdf" onChange={handleChange} />
    </div>
  );
}
