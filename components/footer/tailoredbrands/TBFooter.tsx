'use client';

import TBFooterLinks from './TBFooterLinks';
import TBNewsletter from './TBNewsletter';
import TBSocialMedia from './TBSocialMedia';
import TBCopyright from './TBCopyright';
import styles from './styles/TBFooter.module.scss';

export interface FooterData {
  links?: {
    columns?: Array<{
      title: string;
      items: Array<{ label: string; link: string }>;
    }>;
  };
  newsletter?: {
    enabled?: boolean;
    title?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
  };
  social_media?: {
    enabled?: boolean;
    title?: string;
    links?: Array<{ platform: string; url: string; icon?: string }>;
  };
  copyright?: {
    text?: string;
    year?: number;
  };
  payment_methods?: {
    enabled?: boolean;
    methods?: Array<{ name: string; icon?: string }>;
  };
}

interface FooterProps {
  data?: FooterData;
}

export default function TBFooter({ data }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {data?.links?.columns && data.links.columns.length > 0 && (
          <TBFooterLinks columns={data.links.columns} />
        )}
        
        {data?.newsletter?.enabled && (
          <TBNewsletter
            title={data.newsletter.title}
            description={data.newsletter.description}
            placeholder={data.newsletter.placeholder}
            buttonText={data.newsletter.buttonText}
          />
        )}
        
        {data?.social_media?.enabled && (
          <TBSocialMedia
            title={data.social_media.title}
            links={data.social_media.links}
          />
        )}
        
        <TBCopyright
          text={data?.copyright?.text}
          year={data?.copyright?.year}
        />
        
        {data?.payment_methods?.enabled && (
          <div className={styles.paymentMethods}>
            <span className={styles.paymentLabel}>We Accept:</span>
            <div className={styles.paymentIcons}>
              {data.payment_methods.methods?.map((method, index) => (
                <span key={index} className={styles.paymentIcon}>
                  {method.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

