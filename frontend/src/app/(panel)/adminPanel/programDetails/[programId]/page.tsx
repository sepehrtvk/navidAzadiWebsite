'use client'

import { PROGRAM_BY_ID_URL } from '@constants/apis/program'
import { getQueryParams } from '@utils'
import useApi from '@utils/api/useApi'
import React from 'react'

export interface ProgramDetailsPageProps {
  params: {
    programId: string
  }
}

function ProgramDetailsPage({ params }: ProgramDetailsPageProps) {
  const {
    data: program,
    loading: programLoading,
    fetch: getProgram,
  } = useApi<any>({
    url: PROGRAM_BY_ID_URL + getQueryParams({ programId: params.programId }),
    dataFormatter: data => {
      return data.data.programs[0]
    },
  })

  if (programLoading || !program) return <p>loading...</p>

  return (
    <div>
      {program.photoListPath.map(filePath => (
        <img src={'http://localhost:5500/' + filePath} width={200} />
      ))}
    </div>
  )
}

export default ProgramDetailsPage
