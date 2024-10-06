import React from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/components/shared/auth-provider';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const { isAuthenticated } = useAuth();

  const [searchParams] = useSearchParams();
  const error = Boolean(searchParams.get('error'));
  const message = searchParams.get('message');

  const { toast } = useToast();

  React.useEffect(() => {
    if (error) {
      toast({
        title: 'Login failed!',
        description: message,
        variant: 'destructive',
      });
    }
  }, [error, message, toast]);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="mx-auto mt-16 w-2/6">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <form action={`${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`} method="POST">
            <Button type="submit" className="bg-primary-500 hover:bg-primary-400 w-full">
              Login with Google
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm">
            Don't have an account yet?{' '}
            <Link to="/register" className="text-secondary-500 font-bold">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
