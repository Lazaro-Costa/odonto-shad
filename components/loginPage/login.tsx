"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"

const Login = () => {
  const loginFiltersSchema = z.object({
    nome: z.string().min(3, "O nome deve conter pelo menos 3 caracteres"),
    email: z.string().email("O email deve ser válido"),
  })
  type LoginFilters = z.infer<typeof loginFiltersSchema>
  const form = useForm<LoginFilters>({
    resolver: zodResolver(loginFiltersSchema),
  })
  function onSubmit(data: LoginFilters) {
    console.log(data)
  }
  return (
    <section className="flex w-full flex-col items-center justify-center rounded-lg border border-slate-600 bg-slate-900/50 p-4">
      <div>
        <div className="flex w-max items-center justify-center gap-2 self-start">
          <span className="relative flex size-5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-5 rounded-full bg-sky-500"></span>
          </span>
          <h1 className="text-3xl font-bold text-sky-500">Login.</h1>
        </div>

        <p className="mt-2 text-left text-lg leading-6">
          Efetue Login para agendar uma consulta.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 flex w-[400px] flex-col gap-2"
          >
            <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: José da Cunha Costa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: lazaro@costa.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <Button type="submit" className="mt-2 w-fit self-end" disabled={form.formState.isLoading}>
              Login
            </Button>
          </form>
        </Form>
        <div>
          <a href="/register" className="text-sky-500 hover:underline">
            <p className="mt-2 flex items-center justify-center text-right font-sans text-xs font-bold ">
              Ainda não tem uma conta? Crie uma já <ArrowRight />
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Login
