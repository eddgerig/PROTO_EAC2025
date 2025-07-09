
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LessonCardProps {
  title: string;
  description?: string;
  image?: string;
  button1Text?: string;
  button2Text?: string;
}

export default function LessonCard({
  title,
  description,
  image = "/static/images/cards/contemplative-reptile.jpg",
  
}: LessonCardProps) {
  return (
    <Card sx={{ 
      width: '100%', 
      maxWidth: 420, 
      backgroundColor: '#1e293b',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      border: '4px solid #FFD447',
      borderRadius: 2
    }}>
      <Box sx={{ }}>
        <CardMedia
          sx={{ height: 240, borderRadius: 2 }}
          image={image}
          title={title}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FFD447', fontWeight: 'bold', textAlign: 'center' }}>
          {title}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
