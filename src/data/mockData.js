export const mockUser = {
  name: "Dr. Sarah Jenkins",
  role: "Dental Hygienist",
  avatar: "https://i.pravatar.cc/150?u=sarah",
  location: "Central London, UK",
  rating: 4.9,
  completedShifts: 124,
  balance: 1450.00,
  isVerified: true
};

export const mockShifts = [
  {
    id: "s1",
    clinicName: "Smile Care Dental",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80",
    distance: "1.2 miles",
    rate: "£45/hr",
    date: "Today",
    time: "09:00 - 17:00",
    role: "Hygienist",
    status: "Urgent",
    lat: 51.5074,
    lng: -0.1278,
    requirements: ["GDC Registered", "Valid DBS", "Airflow Experience"],
    totalPay: "£360.00"
  },
  {
    id: "s2",
    clinicName: "Pearl White Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80",
    distance: "2.5 miles",
    rate: "£42/hr",
    date: "Tomorrow",
    time: "10:00 - 18:00",
    role: "Hygienist",
    status: "Available",
    lat: 51.5174,
    lng: -0.1378,
    requirements: ["GDC Registered", "Valid DBS"],
    totalPay: "£336.00"
  },
  {
    id: "s3",
    clinicName: "Urban Dental Studio",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80",
    distance: "3.8 miles",
    rate: "£50/hr",
    date: "Fri, 24 May",
    time: "08:30 - 16:30",
    role: "Hygienist",
    status: "Premium",
    lat: 51.4974,
    lng: -0.1178,
    requirements: ["GDC Registered", "Valid DBS", "Invisalign Scans"],
    totalPay: "£400.00"
  }
];

export const mockEarnings = {
  weekly: [120, 360, 0, 400, 360, 0, 0],
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  thisWeek: 1240.00,
  pending: 360.00,
  transactions: [
    { id: "t1", date: "Today", desc: "Smile Care Dental", amount: 360.00, status: "pending" },
    { id: "t2", date: "Yesterday", desc: "Pearl White Clinic", amount: 336.00, status: "completed" },
    { id: "t3", date: "Mon, 20 May", desc: "Urban Dental Studio", amount: 400.00, status: "completed" },
  ]
};

export const mockNotifications = [
  { id: "n1", type: "shift", title: "New Urgent Shift", message: "Smile Care Dental needs a Hygienist today.", time: "10m ago", read: false },
  { id: "n2", type: "payment", title: "Payment Processed", message: "£336.00 has been sent to your bank account.", time: "2h ago", read: true },
  { id: "n3", type: "compliance", title: "DBS Expiring Soon", message: "Your DBS check expires in 30 days.", time: "1d ago", read: true },
];
