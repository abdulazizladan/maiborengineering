import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // No need to declare title and meta as properties if injecting them
  // protected title = 'maiborengineering';
  // title: Title | null | undefined;
  // meta: Meta | undefined;

  public isMobileMenuOpen = false;

  // Inject Title and Meta services into the constructor
  constructor(private titleService: Title, private metaService: Meta) {}

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngOnInit() {
    // Set a compelling and keyword-rich title for your main application.
    // This title will appear in browser tabs and search engine results.
    this.titleService.setTitle('Leading Construction, Consultancy & Engineering Firm | Maibor Engineering');

    // Add or update meta description. This is crucial for search engine snippets.
    // It should be concise, informative, and include your primary keywords.
    this.metaService.updateTag(
      {
        name: 'description',
        content: 'Maibor Engineering provides expert construction, civil engineering, and consultancy services. Specializing in innovative solutions for residential, commercial, and industrial projects. Contact us for your next project.'
      },
      'name="description"' // This ensures we update the existing description tag if it exists
    );

    // Add meta keywords (less impactful for Google, but still used by some search engines).
    this.metaService.addTag(
      {
        name: 'keywords',
        content: 'construction, engineering, consultancy, civil engineering, project management, building, infrastructure, design, Maibor, Maribor, Nigeria' // Add relevant location if 'Maibor' refers to a place
      }
    );

    // Add a canonical URL to prevent duplicate content issues.
    // Replace 'https://www.yourdomain.com' with your actual domain.
    // This tells search engines the preferred version of the page.
    this.metaService.addTag(
      {
        rel: 'canonical',
        href: 'https://www.yourdomain.com/' // Your main website URL
      }
    );

    // --- Optional: Open Graph (for Facebook, LinkedIn, etc.) and Twitter Card meta tags ---
    // These improve how your link previews appear when shared on social media.

    // Open Graph Title
    this.metaService.addTag({ property: 'og:title', content: 'Maibor Engineering | Construction & Consultancy Experts' });
    // Open Graph Description (can be same as meta description or slightly different)
    this.metaService.addTag({ property: 'og:description', content: 'Expert construction, civil engineering, and consultancy services for innovative projects.' });
    // Open Graph Type (e.g., 'website', 'article', 'profile')
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    // Open Graph URL (should be the canonical URL)
    this.metaService.addTag({ property: 'og:url', content: 'https://www.yourdomain.com/' });
    // Open Graph Image (URL to an image that represents your company/page, e.g., your logo)
    // Ensure this image is high quality and has a good aspect ratio (e.g., 1200x630 pixels)
    this.metaService.addTag({ property: 'og:image', content: 'https://www.yourdomain.com/assets/maibor-engineering-logo.png' });
    // Open Graph Site Name
    this.metaService.addTag({ property: 'og:site_name', content: 'Maibor Engineering' });

    // Twitter Card Type (e.g., 'summary', 'summary_large_image', 'app', 'player')
    this.metaService.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    // Twitter Site (@username of website)
    this.metaService.addTag({ name: 'twitter:site', content: '@YourTwitterHandle' }); // Replace with your Twitter handle
    // Twitter Creator (@username of content creator, if different from site)
    this.metaService.addTag({ name: 'twitter:creator', content: '@YourTwitterHandle' });
    // Twitter Title
    this.metaService.addTag({ name: 'twitter:title', content: 'Maibor Engineering | Construction & Consultancy' });
    // Twitter Description
    this.metaService.addTag({ name: 'twitter:description', content: 'Your trusted partner for construction, engineering, and consultancy services.' });
    // Twitter Image
    this.metaService.addTag({ name: 'twitter:image', content: 'https://www.yourdomain.com/assets/maibor-engineering-logo.png' });
  }
}