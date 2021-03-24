/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Marketplace from 'assets/feature/marketplace.svg';
import Gift from 'assets/feature/gift.svg';
import Award from 'assets/feature/award.svg';

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: 'Analyze',
    title: 'Problem solving',
    text: 'Our team of experts love to analyze and really understand the problem to create the best solution possible. We will create the best solution for your needs.',
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: 'Gift',
    title: 'Process',
    text:
      'Our team will always have as a priority the business goals that you want to achieve.',
  },
  {
    id: 3,
    imgSrc: Award,
    altText: 'Deliver',
    title: 'Delivery',
    text: 'Our team will deliver a high-quality solution that will boost your business',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Go beyond with your product"
          description="We work across different skill sets, technologies, and geographies. Delivering end-to-end digital solutions that drive their business growth and improve operating efficiency."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
