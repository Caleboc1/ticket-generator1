
import { Select } from "@/components/ui/select";
import { TicketData } from "@/pages/Index";

interface Props {
  ticketData: TicketData;
  setTicketData: (data: TicketData) => void;
  onNext: () => void;
}

export function Step1TicketSelection({ ticketData, setTicketData, onNext }: Props) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-light">Ticket Selection</h1>
          <span className="text-sm text-ticket-foreground/60">Step 1/3</span>
        </div>
        <div className="h-1 bg-ticket-muted rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-ticket-accent rounded-full" />
        </div>
      </div>

      <div className="space-y-6 py-4">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Techember Fest '25</h2>
          <p className="text-ticket-foreground/60">
            Join us for an unforgettable experience at Techember Fest. Secure your spot now.
          </p>
          <p className="flex items-center justify-center space-x-2 text-sm">
            <span>📍 Lagos, Nigeria</span>
            <span className="text-ticket-foreground/30">||</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </p>
        </div>

        <div className="space-y-6 mt-8">
          <div>
            <label className="block text-sm font-medium mb-2">Select Ticket Type:</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setTicketData({ ...ticketData, ticketType: "free" })}
                className={`p-4 rounded-lg border transition-all ${
                  ticketData.ticketType === "free"
                    ? "border-ticket-accent bg-ticket-accent/10"
                    : "border-ticket-muted/50 hover:border-ticket-accent/50"
                }`}
              >
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm text-ticket-foreground/60">REGULAR ACCESS</div>
                <div className="text-xs mt-1">20/52</div>
              </button>
              <button
                onClick={() => setTicketData({ ...ticketData, ticketType: "vip" })}
                className={`p-4 rounded-lg border transition-all ${
                  ticketData.ticketType === "vip"
                    ? "border-ticket-accent bg-ticket-accent/10"
                    : "border-ticket-muted/50 hover:border-ticket-accent/50"
                }`}
              >
                <div className="text-2xl font-bold">$150</div>
                <div className="text-sm text-ticket-foreground/60">VIP ACCESS</div>
                <div className="text-xs mt-1">20/52</div>
              </button>
              <button
                onClick={() => setTicketData({ ...ticketData, ticketType: "vvip" })}
                className={`p-4 rounded-lg border transition-all ${
                  ticketData.ticketType === "vvip"
                    ? "border-ticket-accent bg-ticket-accent/10"
                    : "border-ticket-muted/50 hover:border-ticket-accent/50"
                }`}
              >
                <div className="text-2xl font-bold">$150</div>
                <div className="text-sm text-ticket-foreground/60">VVIP ACCESS</div>
                <div className="text-xs mt-1">20/52</div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Number of Tickets</label>
            <select
              value={ticketData.quantity}
              onChange={(e) => setTicketData({ ...ticketData, quantity: Number(e.target.value) })}
              className="w-full ticket-input rounded-lg p-2"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button className="btn-secondary">Cancel</button>
        <button onClick={onNext} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
}
