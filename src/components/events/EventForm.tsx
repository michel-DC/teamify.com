"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { EventCategory, EventStatus } from "@prisma/client";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import {
  DropdownMenu as Select,
  DropdownMenuContent as SelectContent,
  DropdownMenuItem as SelectItem,
  DropdownMenuTrigger as SelectTrigger,
  DropdownMenuLabel as SelectValue,
} from "@/components/ui/dropdown-menu";

const eventFormSchema = z.object({
  title: z.string().min(2, "Le titre doit contenir au moins 2 caractères"),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères"),
  date: z.string(),
  location: z.string().min(2, "L'emplacement est requis"),
  capacity: z.string().min(1, "La capacité est requise"),
  status: z.nativeEnum(EventStatus),
  budget: z.string().min(1, "Le budget est requis"),
  category: z.nativeEnum(EventCategory),
  isPublic: z.boolean().default(true),
  isCancelled: z.boolean().default(false),
  orgId: z.string().min(1, "L'organisation est requise"),
});

type EventFormValues = z.infer<typeof eventFormSchema>;

interface EventFormProps {
  orgId: string;
}

export function EventForm({ orgId }: EventFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      location: "",
      capacity: "",
      status: EventStatus.BROUILLON,
      budget: "",
      category: EventCategory.REUNION,
      isPublic: true,
      isCancelled: false,
      orgId: orgId,
    },
  });

  async function onSubmit(data: EventFormValues) {
    setIsLoading(true);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });

      const response = await fetch("/api/dashboard/events", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'événement");
      }

      toast.success("Événement créé avec succès");
      router.refresh();
      router.push("/dashboard/events");
    } catch (error) {
      toast.error("Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Titre de l'événement" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description de l'événement" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emplacement</FormLabel>
                <FormControl>
                  <Input placeholder="Lieu de l'événement" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacité</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Nombre de places"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Budget en €" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statut</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un statut" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(EventStatus).map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Catégorie</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une catégorie" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(EventCategory).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Création..." : "Créer l'événement"}
        </Button>
      </form>
    </Form>
  );
}
