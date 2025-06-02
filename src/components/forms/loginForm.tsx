"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().nonempty("Senha não pode estar vazia"),
});

type FormType = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isSubmitting } = form.formState;

  async function submitForm({ email, password }: FormType) {
    const response = await authClient.signIn.email(
      {
        email,
        password,
      },

      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          if (ctx.error.code === "INVALID_EMAIL_OR_PASSWORD") {
            form.setError("root", {
              message: "Email ou senha inválidos",
            });
          }
          toast.error("Erro", {
            position: "bottom-center",
            description: ctx.error.message,
          });
        },
      },
    );
  }

  return (
    <div className="w-full max-w-sm place-content-center justify-items-start">
      <h2 className="text-3xl font-semibold">Entre</h2>
      <p className="text-muted-foreground text-sm">
        Entre com seu email e senha para continuar.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="mt-10 flex w-full flex-col items-end justify-center space-y-4"
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormMessage />
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormMessage />
                <div className="relative flex items-center justify-end">
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Senha"
                      type={passwordVisibility ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute right-1 cursor-pointer p-1"
                    onClick={() => {
                      setPasswordVisibility((prev) => !prev);
                    }}
                  >
                    {passwordVisibility ? (
                      <EyeClosed size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <p className="text-destructive text-sm">
              {form.formState.errors.root.message}
            </p>
          )}

          <Button disabled={isSubmitting} className="mt-6" type="submit">
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Entrar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
