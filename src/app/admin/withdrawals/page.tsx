import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, CheckCircle, XCircle } from "lucide-react"
import { adminDashboardData } from "@/lib/placeholder-data"

export default function AdminWithdrawalsPage() {
  const { withdrawals } = adminDashboardData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Withdrawal Approvals</CardTitle>
        <CardDescription>Approve or reject user withdrawal requests.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Withdrawal ID</TableHead>
              <TableHead>User ID</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawals.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.userId}</TableCell>
                <TableCell>${item.amount.toFixed(2)}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Badge variant={item.status === 'Approved' ? 'default' : item.status === 'Pending' ? 'secondary' : 'destructive'}>{item.status}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem><CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Approve</DropdownMenuItem>
                      <DropdownMenuItem><XCircle className="mr-2 h-4 w-4 text-red-500" /> Reject</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
