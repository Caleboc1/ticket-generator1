
import { TicketData } from "@/pages/Index";
import barcode from '/barcode.png';

interface Props {
  ticketData: TicketData;
  onBookAnother: () => void;
}

export function Step3TicketConfirmation({ ticketData, onBookAnother }: Props) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-light">Your Ticket is Booked!</h1>
          <span className="text-sm text-ticket-foreground/60">Step 3/3</span>
        </div>
        <div className="h-1 bg-ticket-muted rounded-full overflow-hidden">
          <div className="h-full w-full bg-ticket-accent rounded-full" />
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-ticket-foreground/80">
          Check your email for a copy or you can{" "}
          <button className="text-ticket-accent hover:underline">download</button>
        </p>
      </div>

      <div className="max-w-md mx-auto bg-ticket-muted/30 rounded-2xl p-6 border border-ticket-accent/20">
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Techember Fest '25</h2>
            <div className="text-sm text-ticket-foreground/60">
              <p>📍 04 Rumnens road, Ikoy, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          {ticketData.avatarUrl && (
            <div className="flex justify-center">
              <img
                src={ticketData.avatarUrl}
                alt="Profile"
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-ticket-foreground/60">Enter your name</p>
              <p className="font-medium">{ticketData.name}</p>
            </div>
            <div>
              <p className="text-ticket-foreground/60">Enter your email *</p>
              <p className="font-medium">{ticketData.email}</p>
            </div>
            <div>
              <p className="text-ticket-foreground/60">Ticket Type:</p>
              <p className="font-medium">{ticketData.ticketType.toUpperCase()}</p>
            </div>
            <div>
              <p className="text-ticket-foreground/60">Ticket for:</p>
              <p className="font-medium">{ticketData.quantity}</p>
            </div>
          </div>

          {ticketData.specialRequest && (
            <div className="text-sm">
              <p className="text-ticket-foreground/60">Special request?</p>
              <p className="font-medium">{ticketData.specialRequest}</p>
            </div>
          )}
        </div>

        <div className="border-t border-dashed border-gray-600 pt-4">
            <div className="text-center">
              <img
               src={barcode}
               alt="Barcode"
                className="max-w-full h-auto mx-auto"
              />
              <p className="text-xs text-gray-400 mt-2">1 234567 891026</p>
            </div>
          </div>
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onBookAnother} className="btn-secondary">
          Book Another Ticket
        </button>
        <button className="btn-primary">Download Ticket</button>
      </div>
    </div>
  );
}
