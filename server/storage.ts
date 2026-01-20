import { db } from "./db";
import {
  products,
  inquiries,
  type InsertProduct,
  type InsertInquiry,
  type Product,
  type Inquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  seedProducts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async seedProducts(): Promise<void> {
    const existing = await this.getProducts();
    if (existing.length > 0) return;

    const seedData: InsertProduct[] = [
      {
        name: "Active HF Decoder (Reader)",
        description: "Light-weight small form-factor reader with one-touch operation, mil-spec durability, and IP-68 rating. Features cloud connectivity (Mesh, LoRaWAN) and OTA updates.",
        price: "2535.00",
        category: "Reader",
        specs: "IP68, 72 hrs battery (HF), Global SIM, WiFi, Bluetooth",
      },
      {
        name: "UHF Decoder (Reader)",
        description: "Passive UHF reader with identical form factor to HF model. Supports all standard UHF tags. Cloud connected with real-time data ingestion.",
        price: "2535.00",
        category: "Reader",
        specs: "IP68, 10 hrs battery (UHF), Global SIM, WiFi, Bluetooth",
      },
      {
        name: "Active HF Mat",
        description: "Rollable and lightweight HF mats required for use with HF readers. Durable and easy to deploy.",
        price: "65.00", // per meter
        category: "Mat",
        specs: "Rollable, Lightweight, Compatible with HF Readers",
      },
      {
        name: "8m UHF Mat",
        description: "Foldable UHF mat, deployable in less than a minute. Optional trolley available.",
        price: "1300.00",
        category: "Mat",
        specs: "8m width, Foldable, High read rates",
      },
      {
        name: "Active HF Shoe Tag",
        description: "Reusable active HF shoe-tag transponder with 10 year battery life.",
        price: "6.89",
        category: "Tag",
        specs: "10 year battery, Reusable, Active HF",
      },
      {
        name: "Active HF Multisport Tag",
        description: "Multi-sport active (MTS) HF tag for triathlons and other multisport events.",
        price: "14.63",
        category: "Tag",
        specs: "Active HF, Multisport use",
      },
      {
        name: "UHF Tag",
        description: "Standard UHF bib tag. Disposable and cost-effective.",
        price: "0.26",
        category: "Tag",
        specs: "Passive UHF, Disposable",
      },
    ];

    await db.insert(products).values(seedData);
  }
}

export const storage = new DatabaseStorage();
