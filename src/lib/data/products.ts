// ফাইল: src/lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [
  // কার্যকরী লিঙ্ক দিয়ে আপডেট করা হয়েছে - বাংলায় নাম
  {
    id: "prod-01",
    name: "প্রিমিয়াম ক্যালিগ্রাফি পেন সেট",
    price: 1299,
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
    category: "Course",
  },
  {
    id: "prod-02",
    name: "ক্যালিগ্রাফি ইনক বোতল সেট",
    price: 899,
    imageUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070",
    category: "E-book",
  },
  {
    id: "prod-03",
    name: "আরবি ক্যালিগ্রাফি বিশেষ ব্রাশ",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070",
    category: "Software",
  },
  {
    id: "prod-04",
    name: "বাংলা ক্যালিগ্রাফি প্র্যাকটিস বুক",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070",
    category: "Course",
  },
  {
    id: "prod-05",
    name: "ইংরেজি ক্যালিগ্রাফি কমপ্লিট গাইড",
    price: 795,
    imageUrl:
      "https://images.unsplash.com/photo-1620288627223-53302f427cde?q=80&w=1972",
    category: "E-book",
  },
  {
    id: "prod-06",
    name: "ক্যালিগ্রাফি বিশেষ পেপার প্যাক",
    price: 299,
    imageUrl:
      "https://images.unsplash.com/photo-1542626991-cbc4e629f6c2?q=80&w=2070",
    category: "Course",
  },
  {
    id: "prod-07",
    name: "ক্যালিগ্রাফি স্টার্টার কমপ্লিট কিট",
    price: 1699,
    imageUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974",
    category: "Design Kit",
  },
  {
    id: "prod-08",
    name: "ক্যালিগ্রাফি ভিডিও টিউটোরিয়াল কোর্স",
    price: 1299,
    imageUrl:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2094",
    category: "E-book",
  },
  {
    id: "prod-09",
    name: "প্রফেশনাল ক্যালিগ্রাফি মাস্টার সেট",
    price: 2499,
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    category: "Course",
  },
  {
    id: "prod-10",
    name: "ক্যালিগ্রাফি এক্সেসরিজ প্রিমিয়াম প্যাক",
    price: 799,
    imageUrl:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1974",
    category: "Assets",
  },
  {
    id: "prod-11",
    name: "ক্যালিগ্রাফি অনলাইন লাইভ কোর্স",
    price: 1999,
    imageUrl:
      "https://images.unsplash.com/photo-1637825922448-83510522caf2?q=80&w=2070",
    category: "Course",
  },
  {
    id: "prod-12",
    name: "ক্যালিগ্রাফি ডিজাইন টেমপ্লেট কিট",
    price: 499,
    imageUrl:
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bf3f?q=80&w=1974",
    category: "Design Kit",
  },
  {
    id: "prod-13",
    name: "ক্যালিগ্রাফি অ্যাডভান্সড টেকনিক কোর্স",
    price: 1599,
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-5f61d25c094f?q=80&w=2070",
    category: "Course",
  },
  {
    id: "prod-14",
    name: "ক্যালিগ্রাফি পোর্টফোলিও টেমপ্লেট",
    price: 699,
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070",
    category: "Template",
  },
  {
    id: "prod-15",
    name: "ক্যালিগ্রাফি ব্যক্তিগত কোচিং",
    price: 3499,
    imageUrl:
      "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070",
    category: "Course",
  },
];
