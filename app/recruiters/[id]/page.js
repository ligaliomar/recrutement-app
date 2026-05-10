'use client'
import React from 'react'
import { selectCandidate } from '../../redux/candidateSlice'
import { Card, Typography, Button } from 'antd'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const { Title } = Typography

export default function CandidateDetailPage({ params }) {
   const resolvedParams=React.use(params)
  const candidate = useSelector(state => 
    state.candidates.list.find(c => c.id === parseInt(resolvedParams.id))
  )
  const router = useRouter()

  if (!candidate) {
    return <div>Candidat non trouvé</div>
  }

  return (
    <Card style={{ maxWidth: 600, margin: '40px auto' }}>
      <Title level={2}>{candidate.nom} {candidate.prenom}</Title>
      <p><strong>Email :</strong> {candidate.email}</p>
      <p><strong>Téléphone :</strong> {candidate.telephone}</p>
      <p><strong>Poste souhaité :</strong> {candidate.poste}</p>
      <Button onClick={() => router.back()}>Retour</Button>
    </Card>
  )
}