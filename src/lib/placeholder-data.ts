import { CheckCircle, Clock, DollarSign, ExternalLink, HelpCircle } from "lucide-react";

export const userStats = {
  balance: 1250.75,
  adStatus: 'completed', // 'pending', 'completed'
  directs: 12,
  team: {
    level1: 12,
    level2: 45,
    level3: 112,
    level4: 250,
    level5: 580,
  },
  upcomingEligibility: 'Level 3 Bonus in 5 days',
};

export const earningLedger = [
  {
    id: 'TXN72834',
    type: 'Daily Ad View',
    amount: 5.00,
    status: 'credited',
    date: '2024-05-20T10:00:00Z',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    id: 'TXN72801',
    type: 'Referral Bonus - Lvl 1',
    amount: 10.00,
    status: 'credited',
    date: '2024-05-19T14:30:00Z',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    id: 'TXN72799',
    type: 'Telegram Bonus',
    amount: 20.00,
    status: 'credited',
    date: '2024-05-19T11:00:00Z',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    id: 'WD72750',
    type: 'Withdrawal',
    amount: -200.00,
    status: 'pending',
    date: '2024-05-18T09:00:00Z',
    icon: Clock,
    color: 'text-yellow-500'
  },
  {
    id: 'TXN72745',
    type: 'Daily Ad View',
    amount: 5.00,
    status: 'credited',
    date: '2024-05-18T08:30:00Z',
    icon: CheckCircle,
    color: 'text-green-500'
  },
];


export const adminDashboardData = {
  payments: [
    { id: 'PAY-001', userId: 'USR-101', amount: 50.00, date: '2024-05-20', status: 'Pending' },
    { id: 'PAY-002', userId: 'USR-102', amount: 50.00, date: '2024-05-20', status: 'Approved' },
  ],
  kyc: [
    { id: 'KYC-001', userId: 'USR-103', name: 'Alice Johnson', date: '2024-05-19', status: 'Pending' },
    { id: 'KYC-002', userId: 'USR-104', name: 'Bob Williams', date: '2024-05-18', status: 'Rejected' },
  ],
  withdrawals: [
     { id: 'WD-001', userId: 'USR-105', amount: 150.00, date: '2024-05-20', status: 'Pending' },
     { id: 'WD-002', userId: 'USR-106', amount: 200.00, date: '2024-05-19', status: 'Approved' },
  ]
};
