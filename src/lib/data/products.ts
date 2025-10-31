// ফাইল: src/lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export const products: Product[] = [
  // কার্যকরী লিঙ্ক দিয়ে আপডেট করা হয়েছে
  { id: 'prod-01', name: 'Next.js for Beginners Course', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070', category: 'Course' },
  { id: 'prod-02', name: 'Advanced TypeScript E-book', price: 29.99, imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070', category: 'E-book' },
  { id: 'prod-03', name: 'React UI Component Library', price: 99.00, imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070', category: 'Software' },
  { id: 'prod-04', name: 'Mastering Tailwind CSS', price: 39.99, imageUrl: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070', category: 'Course' },
  { id: 'prod-05', name: 'Full-Stack GraphQL Guide', price: 59.50, imageUrl: 'https://images.unsplash.com/photo-1620288627223-53302f427cde?q=80&w=1972', category: 'E-book' },
  { id: 'prod-06', name: 'DevOps for Developers', price: 79.00, imageUrl: 'https://images.unsplash.com/photo-1542626991-cbc4e629f6c2?q=80&w=2070', category: 'Course' },
  { id: 'prod-07', name: 'Figma Design System Kit', price: 69.00, imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974', category: 'Design Kit' },
  { id: 'prod-08', name: 'JavaScript Algorithms', price: 24.99, imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2094', category: 'E-book' },
  { id: 'prod-09', name: 'Python for Data Science', price: 89.99, imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070', category: 'Course' },
  { id: 'prod-10', name: 'Professional Icon Set', price: 19.99, imageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1974', category: 'Assets' },
  { id: 'prod-11', name: 'Vue.js Complete Guide', price: 49.99, imageUrl: 'https://images.unsplash.com/photo-1637825922448-83510522caf2?q=80&w=2070', category: 'Course' },
  { id: 'prod-12', name: 'Mobile App Wireframe Kit', price: 34.00, imageUrl: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bf3f?q=80&w=1974', category: 'Design Kit' },
  { id: 'prod-13', name: 'Cybersecurity Essentials', price: 65.00, imageUrl: 'https://images.unsplash.com/photo-1526374965328-5f61d25c094f?q=80&w=2070', category: 'Course' },
  { id: 'prod-14', name: 'Creative Portfolio Template', price: 22.00, imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070', category: 'Template' },
  { id: 'prod-15', name: 'Node.js API Masterclass', price: 55.00, imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070', category: 'Course' },
];