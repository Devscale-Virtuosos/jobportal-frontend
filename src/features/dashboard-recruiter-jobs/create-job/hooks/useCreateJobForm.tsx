import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormSchemaType } from '../schema/createJob';

export function useCreateJobForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      experienceLevel: '',
      skills: '',
      description: '',
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
  };
}
