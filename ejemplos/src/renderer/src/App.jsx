import { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [people] = useState([
    { name: 'Ana García', role: 'Desarrolladora Frontend', department: 'Tecnología' },
    { name: 'Carlos Rodríguez', role: 'Diseñador UI/UX', department: 'Diseño' },
    { name: 'María López', role: 'Project Manager', department: 'Gestión' },
    { name: 'Juan Martínez', role: 'QA Engineer', department: 'Calidad' },
    { name: 'Laura Fernández', role: 'Backend Developer', department: 'Tecnología' }
  ]);

  const getDepartmentVariant = (department) => {
    const variants = {
      'Tecnología': 'primary',
      'Diseño': 'success',
      'Gestión': 'warning',
      'Calidad': 'info'
    };
    return variants[department] || 'secondary';
  };

  const getIcon = (role) => {
    const iconMap = {
      'Desarrolladora Frontend': '💻',
      'Diseñador UI/UX': '🎨',
      'Project Manager': '📊',
      'QA Engineer': '🧪',
      'Backend Developer': '⚙️'
    };
    return iconMap[role] || '👤';
  };

  return (
    <Container fluid className="bg-light py-5 min-vh-100">
      <Container>
        {/* Header */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 text-primary fw-bold mb-3">
              🚀 Nuestro Equipo
            </h1>
            <p className="lead text-muted">
              Conoce a los talentosos miembros de nuestro equipo
            </p>
          </Col>
        </Row>

        {/* Stats Card */}
        <Row className="mb-5">
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body className="text-center py-4">
                <h2 className="h3 mb-0">
                  Miembros del Equipo{' '}
                  <Badge bg="primary" pill>{people.length}</Badge>
                </h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Members */}
        <Row>
          {people.map((person, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <div 
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bg-primary text-white"
                    style={{width: '80px', height: '80px', fontSize: '2rem'}}
                  >
                    {getIcon(person.role)}
                  </div>
                  <Card.Title className="h5">{person.name}</Card.Title>
                  <Card.Text className="text-muted">{person.role}</Card.Text>
                  <Badge bg={getDepartmentVariant(person.department)} className="mb-2">
                    {person.department}
                  </Badge>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 text-muted">
                  <small>Miembro #{index + 1}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        
      </Container>
    </Container>
  );
}

export default App;