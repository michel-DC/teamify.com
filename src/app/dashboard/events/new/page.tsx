import { EventForm } from "@/components/events/EventForm";

export default function NewEventPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Créer un nouvel événement</h1>
      <EventForm orgId="YOUR_ORG_ID" />
    </div>
  );
}
