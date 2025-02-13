
import { useState } from "react";
import { TicketData } from "@/pages/Index";

interface Props {
  ticketData: TicketData;
  setTicketData: (data: TicketData) => void;
  onBack: () => void;
  onNext: () => void;
}

export function Step2AttendeeDetails({ ticketData, setTicketData, onBack, onNext }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!ticketData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!ticketData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ticketData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!ticketData.avatarUrl?.trim()) {
      newErrors.avatar = "Profile photo is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors({ ...errors, avatar: "Please upload an image file" });
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ticketapp');
      formData.append('cloud_name', 'dz4zwp8kd');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dz4zwp8kd/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setTicketData({ ...ticketData, avatarUrl: data.secure_url });
        setErrors({ ...errors, avatar: '' });
      }
    } catch (error) {
      setErrors({ ...errors, avatar: "Failed to upload image. Please try again." });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-light text-white">Attendee Details</h1>
          <span className="text-sm text-white/60">Step 2/3</span>
        </div>
        <div className="h-1 bg-[#002A2F] rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-[rgb(38,182,170)] rounded-full" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-white">Upload Profile Photo</label>
          <div className="border-2 border-dashed border-[rgb(38,182,170)] rounded-lg p-8 text-center hover:border-[rgb(38,182,170)]/70 transition-colors">
            {ticketData.avatarUrl ? (
              <div className="space-y-4">
                <img
                  src={ticketData.avatarUrl}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-lg object-cover mx-auto"
                />
                <button
                  onClick={() => setTicketData({ ...ticketData, avatarUrl: '' })}
                  className="text-sm text-white hover:underline"
                >
                  Change Photo
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="avatar-upload"
                />
                <label
                  htmlFor="avatar-upload"
                  className="cursor-pointer inline-flex items-center justify-center text-white hover:text-white/80 transition-colors w-full"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">
                      {uploading ? "Uploading..." : "Drag & drop or click to upload"}
                    </span>
                  </div>
                </label>
              </div>
            )}
            {errors.avatar && <p className="text-red-400 text-sm mt-1">{errors.avatar}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">Enter your name</label>
          <input
            type="text"
            value={ticketData.name || ""}
            onChange={(e) => setTicketData({ ...ticketData, name: e.target.value })}
            className="ticket-input w-full rounded-lg p-2 bg-[#002A2F] border border-[#0E3534] text-white placeholder:text-white/50"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">Enter your email *</label>
          <input
            type="email"
            value={ticketData.email || ""}
            onChange={(e) => setTicketData({ ...ticketData, email: e.target.value })}
            className="ticket-input w-full rounded-lg p-2 bg-[#002A2F] border border-[#0E3534] text-white placeholder:text-white/50"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-white">Special request?</label>
          <textarea
            value={ticketData.specialRequest || ""}
            onChange={(e) => setTicketData({ ...ticketData, specialRequest: e.target.value })}
            className="ticket-input w-full rounded-lg p-2 h-24 resize-none bg-[#002A2F] border border-[#0E3534] text-white placeholder:text-white/50"
            placeholder="Enter your special request here"
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary text-white">
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[rgb(38,182,170)] text-white font-medium px-6 py-2 rounded-lg hover:bg-[rgb(38,182,170)]/90 transition-colors"
          disabled={uploading}
        >
          {`Get My ${ticketData.ticketType === "free" ? "Free" : ticketData.ticketType.toUpperCase()} Ticket`}
        </button>
      </div>
    </div>
  );
}
