'use client'

import { ChangeEvent } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  PaginationItem,
  Pagination,
} from '@mui/material'
import cs from 'classnames'
import ThemeProvider from '../ThemeProvider'
import ChevronLeftIcon from './chevronLeft.svg'
import ChevronRightIcon from './chevronRight.svg'
import consts from './consts'
import KTableProps from './type'
import KButton from '@components/KButton'

const { column, table_info, edit, job } = consts

function KTable({
  headers,
  data,
  indexed = false,
  className,
  hasPagination,
  page,
  setPage,
  totalElements,
  pageSize = 10,
  totalPages,
  getSelectedRow,
}: KTableProps) {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    if (hasPagination) {
      setPage(value)
    }
  }

  return (
    <ThemeProvider>
      <TableContainer className={className}>
        <Table>
          <TableHead>
            <TableRow>
              {indexed && (
                <TableCell>
                  <div className="text-text text-bold15">{column}</div>
                </TableCell>
              )}
              {headers.map((header, index) => (
                <TableCell key={header}>
                  <div
                    className={cs('text-text text-bold15', {
                      // 'text-left': index === headers.length - 1,
                    })}
                  >
                    {header}
                  </div>
                </TableCell>
              ))}
              <TableCell>
                <div className="text-center">
                  <div className="text-text text-bold15">{job}</div>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                key={row.toString()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {indexed && <TableCell>{index + 1 + ((page ?? 1) - 1) * pageSize}</TableCell>}

                {Object.values(row).map((iteem: string, index) => {
                  if (index === 0) return null
                  return (
                    <TableCell key={iteem}>
                      <div
                        className={cs('text-text text-regular15', {
                          // 'text-left': index === headers.length - 1,
                        })}
                      >
                        {iteem ? iteem : '-'}
                      </div>
                    </TableCell>
                  )
                })}

                <TableCell>
                  <div className="text-center">
                    <KButton
                      disabled={false}
                      text={edit}
                      size="small"
                      typography="buttonSmall"
                      width={70}
                      onClick={() => {
                        // eslint-disable-next-line no-unused-expressions
                        getSelectedRow && getSelectedRow(data[index])
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {hasPagination && (
        <div className="grid grid-cols-3 justify-between items-center mt-6">
          <div className="text-medium15 text-text-dark">
            {table_info(
              Math.min((page - 1) * pageSize + 1, totalElements),
              Math.min(page * pageSize, totalElements),
              totalElements,
            )}
          </div>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            sx={{
              '.MuiPaginationItem-root': {
                MozFontFeatureSettings: "'ss04'",
                WebkitFontFeatureSettings: "'ss04'",
                fontFeatureSettings: "'ss04'",
                color: '#11131F',
                borderRadius: '8px',
                borderColor: '#14151A26',
              },
              '.MuiPaginationItem-previousNext': {
                border: 0,
                fill: '#8F97B2',
              },
              '.Mui-selected': {
                color: '#00276B !important',
                backgroundColor: '#CAF5FD !important',
                borderColor: '#CAF5FD',
              },
              '.Mui-selected:hover': {
                color: '#00276B !important',
                backgroundColor: '#CAF5FD !important',
                borderColor: '#CAF5FD',
              },
            }}
            variant="outlined"
            shape="rounded"
            renderItem={item => (
              <PaginationItem
                slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }}
                {...item}
              />
            )}
          />
        </div>
      )}
    </ThemeProvider>
  )
}

export default KTable
