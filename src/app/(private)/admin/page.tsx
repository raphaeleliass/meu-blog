import LoginForm from "@/components/forms/loginForm";

export default function page() {
  return (
    <div className="mx-auto flex h-[90dvh] w-full md:max-w-6xl md:flex-row md:p-12">
      <div className="flex h-full rounded-l-xl bg-blue-800/80 max-sm:hidden md:w-1/2 md:p-12">
        <p className="mt-auto text-sm font-semibold text-blue-400">
          "A simplicidade é o último grau de sofisticação." - Da Vinci
        </p>
      </div>
      <div className="md:border-muted-foreground/10 h-full place-content-center justify-items-center rounded-r-xl max-sm:mx-auto max-sm:max-w-sm md:w-1/2 md:border-1 md:p-12">
        <LoginForm />
      </div>
    </div>
  );
}
