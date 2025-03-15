<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// Example data for users who paid
const users = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Unpaid', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Paid', method: 'Bank Transfer', amount: '$300.00' },
  { invoice: 'INV004', status: 'Unpaid', method: 'Credit Card', amount: '$200.00' }
]
</script>

<template>
  <div>
    <Table>
      <TableCaption>A list of users who paid or have pending bills.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
            v-for="(user, index) in users"
            :key="user.invoice"
            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'"
        >
          <TableCell class="font-medium">{{ user.invoice }}</TableCell>
          <TableCell>{{ user.status }}</TableCell>
          <TableCell>{{ user.method }}</TableCell>
          <TableCell class="text-right">{{ user.amount }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
