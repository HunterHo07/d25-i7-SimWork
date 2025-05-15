export const roleTasks = {
  developer: [
    {
      id: "dev-1",
      title: "Fix the Login Button",
      description: "The login button on the customer portal is not working correctly. Debug the issue and implement a fix.",
      difficulty: "Easy",
      timeEstimate: "10-15 minutes",
      skills: ["JavaScript", "React", "Debugging"],
      codeSnippet: `
function LoginButton({ onLogin }) {
  const handleClick = () => {
    // Bug: onLogin is not being called
    console.log('Button clicked');
  };
  
  return (
    <button 
      className="login-button" 
      onClick={handleClick}
    >
      Log In
    </button>
  );
}
      `,
      solution: `
function LoginButton({ onLogin }) {
  const handleClick = () => {
    console.log('Button clicked');
    onLogin(); // Fixed: Call the onLogin function
  };
  
  return (
    <button 
      className="login-button" 
      onClick={handleClick}
    >
      Log In
    </button>
  );
}
      `,
    },
    {
      id: "dev-2",
      title: "Implement Data Filtering",
      description: "Add a filtering function to the product list that allows users to filter products by category and price range.",
      difficulty: "Medium",
      timeEstimate: "20-30 minutes",
      skills: ["JavaScript", "Array Methods", "React"],
      codeSnippet: `
function filterProducts(products, filters) {
  // TODO: Implement filtering logic
  // filters object has: { category: string, minPrice: number, maxPrice: number }
  
  return products; // Currently returns all products without filtering
}
      `,
      solution: `
function filterProducts(products, filters) {
  return products.filter(product => {
    // Check if product matches category filter
    const categoryMatch = !filters.category || product.category === filters.category;
    
    // Check if product is within price range
    const priceMatch = (
      (!filters.minPrice || product.price >= filters.minPrice) &&
      (!filters.maxPrice || product.price <= filters.maxPrice)
    );
    
    // Return true if product matches all filters
    return categoryMatch && priceMatch;
  });
}
      `,
    },
    {
      id: "dev-3",
      title: "Optimize API Calls",
      description: "The application is making too many API calls. Implement a caching mechanism to reduce redundant requests.",
      difficulty: "Hard",
      timeEstimate: "30-45 minutes",
      skills: ["JavaScript", "API Integration", "Performance Optimization"],
      codeSnippet: `
// Current implementation makes a new API call every time
async function fetchUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}
      `,
      solution: `
// Implement a simple cache
const userCache = new Map();

async function fetchUserData(userId) {
  // Check if data is in cache
  if (userCache.has(userId)) {
    console.log('Cache hit for user:', userId);
    return userCache.get(userId);
  }
  
  // If not in cache, fetch from API
  console.log('Cache miss for user:', userId);
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  
  // Store in cache for future requests
  userCache.set(userId, data);
  
  return data;
}
      `,
    },
  ],
  designer: [
    {
      id: "design-1",
      title: "Improve Button Contrast",
      description: "The primary action buttons on the website have poor contrast, making them difficult to see for some users. Redesign them to meet WCAG AA standards.",
      difficulty: "Easy",
      timeEstimate: "10-15 minutes",
      skills: ["UI Design", "Accessibility", "Color Theory"],
      currentDesign: {
        backgroundColor: "#336699",
        textColor: "#7FA9D1",
        borderRadius: "4px",
        padding: "10px 20px",
      },
      requirements: [
        "Maintain brand colors where possible",
        "Achieve minimum contrast ratio of 4.5:1",
        "Ensure text is readable at 16px size",
      ],
    },
    {
      id: "design-2",
      title: "Create Onboarding Illustrations",
      description: "Design a set of three simple illustrations for the app onboarding process that explain the core features.",
      difficulty: "Medium",
      timeEstimate: "25-35 minutes",
      skills: ["Illustration", "Visual Storytelling", "Branding"],
      requirements: [
        "Illustration 1: 'Connect your data'",
        "Illustration 2: 'Analyze performance'",
        "Illustration 3: 'Share insights'",
        "Use the brand color palette: #2D3748, #4A5568, #38B2AC, #4299E1",
        "Simple, minimalist style with consistent visual language",
      ],
    },
    {
      id: "design-3",
      title: "Redesign Dashboard Layout",
      description: "The current dashboard is cluttered and difficult to navigate. Redesign the layout to improve usability and information hierarchy.",
      difficulty: "Hard",
      timeEstimate: "40-50 minutes",
      skills: ["UI/UX Design", "Information Architecture", "Dashboard Design"],
      currentIssues: [
        "Too many elements competing for attention",
        "Important metrics are buried",
        "Poor use of screen real estate",
        "Inconsistent card sizes and styles",
      ],
      requirements: [
        "Prioritize key metrics at the top",
        "Group related information",
        "Create clear visual hierarchy",
        "Ensure responsive design for mobile and desktop",
        "Maintain all existing functionality",
      ],
    },
  ],
  dataEntry: [
    {
      id: "data-1",
      title: "Process Customer Information",
      description: "Enter customer information from the provided forms into the database system.",
      difficulty: "Easy",
      timeEstimate: "15-20 minutes",
      skills: ["Data Entry", "Attention to Detail", "Form Processing"],
      forms: [
        {
          customerName: "John Smith",
          email: "john.smith@example.com",
          phone: "555-123-4567",
          address: "123 Main St, Anytown, CA 94321",
          accountType: "Premium",
          signupDate: "2023-05-15",
        },
        {
          customerName: "Sarah Johnson",
          email: "sarah.j@example.net",
          phone: "555-987-6543",
          address: "456 Oak Ave, Somewhere, NY 10001",
          accountType: "Basic",
          signupDate: "2023-05-16",
        },
        {
          customerName: "Miguel Rodriguez",
          email: "miguel.r@example.org",
          phone: "555-456-7890",
          address: "789 Pine St, Nowhere, TX 75001",
          accountType: "Premium",
          signupDate: "2023-05-16",
        },
      ],
    },
    {
      id: "data-2",
      title: "Validate Product Inventory",
      description: "Compare the inventory spreadsheet with the physical count and update discrepancies.",
      difficulty: "Medium",
      timeEstimate: "25-30 minutes",
      skills: ["Data Verification", "Spreadsheet Skills", "Inventory Management"],
      inventorySystem: [
        { productId: "P001", name: "Widget A", systemCount: 45 },
        { productId: "P002", name: "Widget B", systemCount: 23 },
        { productId: "P003", name: "Gadget C", systemCount: 17 },
        { productId: "P004", name: "Gadget D", systemCount: 32 },
        { productId: "P005", name: "Tool E", systemCount: 8 },
      ],
      physicalCount: [
        { productId: "P001", count: 43 },
        { productId: "P002", count: 23 },
        { productId: "P003", count: 15 },
        { productId: "P004", count: 32 },
        { productId: "P005", count: 10 },
      ],
    },
    {
      id: "data-3",
      title: "Categorize Customer Support Tickets",
      description: "Review customer support tickets and categorize them by issue type, priority, and department.",
      difficulty: "Hard",
      timeEstimate: "35-45 minutes",
      skills: ["Data Classification", "Customer Support", "Problem Analysis"],
      tickets: [
        {
          id: "T-1001",
          subject: "Cannot log into account",
          description: "I've tried resetting my password twice but still can't log in. The reset email never arrives.",
          customer: "user123@example.com",
          dateSubmitted: "2023-05-15T14:30:00Z",
        },
        {
          id: "T-1002",
          subject: "Billing discrepancy on May invoice",
          description: "I was charged $59.99 but my plan is supposed to be $49.99 per month. Please refund the difference.",
          customer: "jane.doe@example.net",
          dateSubmitted: "2023-05-16T09:15:00Z",
        },
        {
          id: "T-1003",
          subject: "Feature request: Dark mode",
          description: "Would love to see a dark mode option in the next update. The bright interface is hard on the eyes at night.",
          customer: "night.owl@example.org",
          dateSubmitted: "2023-05-16T22:45:00Z",
        },
        {
          id: "T-1004",
          subject: "App crashes on startup",
          description: "After the latest update, the mobile app crashes immediately when I try to open it. I'm using an iPhone 12 with iOS 16.2.",
          customer: "mobile.user@example.com",
          dateSubmitted: "2023-05-17T11:20:00Z",
        },
        {
          id: "T-1005",
          subject: "How do I export my data?",
          description: "I need to export all my data for a presentation. Is there a way to download everything as an Excel file?",
          customer: "data.analyst@example.net",
          dateSubmitted: "2023-05-17T15:10:00Z",
        },
      ],
      categories: ["Login/Authentication", "Billing", "Feature Request", "Technical Issue", "How-to/Documentation"],
      priorities: ["Low", "Medium", "High", "Critical"],
      departments: ["Technical Support", "Billing Support", "Product Management", "Documentation Team"],
    },
  ],
  aiEngineer: [
    {
      id: "ai-1",
      title: "Improve Chatbot Responses",
      description: "The customer service chatbot is giving generic responses. Enhance the prompts to make the AI more helpful and specific.",
      difficulty: "Easy",
      timeEstimate: "15-20 minutes",
      skills: ["Prompt Engineering", "Customer Service", "AI Interaction Design"],
      currentPrompt: "You are a customer service assistant. Help the customer with their question.",
      sampleQuestions: [
        "What are your business hours?",
        "How do I reset my password?",
        "Can I return an item after 30 days?",
        "Where is my order? My order number is #45678.",
      ],
    },
    {
      id: "ai-2",
      title: "Create Data Classification Model",
      description: "Develop a system to automatically categorize customer feedback into positive, negative, or neutral sentiment.",
      difficulty: "Medium",
      timeEstimate: "25-35 minutes",
      skills: ["NLP", "Sentiment Analysis", "Classification"],
      sampleFeedback: [
        "I love your product! It's made my life so much easier.",
        "The service was okay, but I expected more features for the price.",
        "Your customer support team was unhelpful and rude.",
        "Just received my order today. Haven't tried it yet.",
        "The app is constantly crashing on my phone. Please fix it!",
        "I've been using this for a month now and it works as expected.",
      ],
    },
    {
      id: "ai-3",
      title: "Design AI-Powered Recommendation System",
      description: "Create a recommendation engine that suggests products based on user browsing history and purchase patterns.",
      difficulty: "Hard",
      timeEstimate: "40-50 minutes",
      skills: ["Recommendation Systems", "User Behavior Analysis", "AI Strategy"],
      userProfile: {
        recentViews: ["Wireless Headphones", "Smartphone Cases", "Bluetooth Speakers"],
        pastPurchases: ["iPhone 13", "Laptop Stand", "USB-C Cable"],
        categoryPreferences: ["Electronics", "Accessories"],
        priceRange: "$50-$200",
      },
      productCatalog: [
        { id: "P1", name: "Premium Wireless Earbuds", category: "Electronics", price: 129.99 },
        { id: "P2", name: "Phone Charging Station", category: "Electronics", price: 45.99 },
        { id: "P3", name: "Waterproof Phone Case", category: "Accessories", price: 29.99 },
        { id: "P4", name: "Portable Power Bank", category: "Electronics", price: 79.99 },
        { id: "P5", name: "Wireless Charging Pad", category: "Electronics", price: 35.99 },
        { id: "P6", name: "Bluetooth Keyboard", category: "Electronics", price: 89.99 },
        { id: "P7", name: "Screen Protector", category: "Accessories", price: 15.99 },
        { id: "P8", name: "Laptop Cooling Pad", category: "Accessories", price: 59.99 },
      ],
    },
  ],
};
