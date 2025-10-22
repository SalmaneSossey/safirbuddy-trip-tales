import { PriceItem } from "@/data/prices";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PricesTableProps {
  prices: PriceItem[];
  limit?: number;
}

export const PricesTable = ({ prices, limit }: PricesTableProps) => {
  const displayPrices = limit ? prices.slice(0, limit) : prices;

  return (
    <div className="rounded-xl border border-border overflow-hidden shadow-soft bg-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-accent">
            <TableHead className="font-semibold">City</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Item</TableHead>
            <TableHead className="font-semibold text-right">Price (MAD)</TableHead>
            <TableHead className="font-semibold">Source</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayPrices.map((price, index) => (
            <motion.tr
              key={`${price.city}-${price.item}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-border hover:bg-accent/50 transition-colors"
            >
              <TableCell className="font-medium">{price.city}</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {price.category}
                </span>
              </TableCell>
              <TableCell className="max-w-xs">
                <div>
                  {price.item}
                  {price.notes && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {price.notes}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right font-semibold">
                {price.price_mad}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {price.source}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
