'use client'
import { Form, Input, Button, Card, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { addCandidate } from '../redux/candidateSlice'
import { useRouter } from 'next/navigation'

const { Title } = Typography

export default function CandidatePage() {
  const dispatch = useDispatch()
  const router = useRouter()

  const onFinish = (values) => {
    // On ajoute le candidat dans Redux
    dispatch(addCandidate(values))
    // On redirige vers la liste
    router.push('/recruiters')
  }

  return (
    <Card style={{ maxWidth: 600, margin: '40px auto' }}>
      <Title level={2}>Formulaire Candidat</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Nom" name="nom" rules={[{ required: true }]}>
          <Input placeholder="Votre nom" />
        </Form.Item>
        <Form.Item label="Prénom" name="prenom" rules={[{ required: true }]}>
          <Input placeholder="Votre prénom" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="votre@email.com" />
        </Form.Item>
        <Form.Item label="Téléphone" name="telephone">
          <Input placeholder="0612345678" />
        </Form.Item>
        <Form.Item label="Poste souhaité" name="poste">
          <Input placeholder="Ex: Développeur React" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Envoyer ma candidature
        </Button>
      </Form>
    </Card>
  )
}