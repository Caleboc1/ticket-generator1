
import { useState } from "react";
import { Header } from "@/components/Header";
import { Step1TicketSelection } from "@/components/Step1TicketSelection";
import { Step2AttendeeDetails } from "@/components/Step2AttendeeDetails";
import { Step3TicketConfirmation } from "@/components/Step3TicketConfirmation";

export type TicketData = {
  ticketType: "free" | "vip" | "vvip";
  quantity: number;
  name?: string;
  email?: string;
  avatarUrl?: string;
  specialRequest?: string;
};

const Index = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState<TicketData>({
    ticketType: "free",
    quantity: 1,
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-ticket-background">
      <Header />
      <main className="pt-24 pb-12 px-4 max-w-3xl mx-auto">
        <div className="glass-card rounded-2xl p-8 animate-fade-in">
          {step === 1 && (
            <Step1TicketSelection
              ticketData={ticketData}
              setTicketData={setTicketData}
              onNext={nextStep}
            />
          )}
          {step === 2 && (
            <Step2AttendeeDetails
              ticketData={ticketData}
              setTicketData={setTicketData}
              onBack={prevStep}
              onNext={nextStep}
            />
          )}
          {step === 3 && (
            <Step3TicketConfirmation
              ticketData={ticketData}
              onBookAnother={() => {
                setStep(1);
                setTicketData({ ticketType: "free", quantity: 1 });
              }}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
