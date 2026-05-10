'use client'
import { Table, Card, Typography, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const { Title } = Typography

export default function RecruitersPage() {
  const candidates = useSelector(state => state.candidates.list)
  const router = useRouter()

  const columns = [
    { title: 'Nom', dataIndex: 'nom' },
    { title: 'Prénom', dataIndex: 'prenom' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Poste', dataIndex: 'poste' },
    {
      title: 'Action',
      render: (_, record) => (
        <Button onClick={() => router.push(`/recruiters/${record.id}`)}>
          Voir détails
        </Button>
      )
    }
  ]

  return (
    <Card style={{ maxWidth: 1000, margin: '40px auto' }}>
      <Title level={2}>Liste des candidats</Title>
      <Table dataSource={candidates} columns={columns} rowKey="id" />
    </Card>
  )
}