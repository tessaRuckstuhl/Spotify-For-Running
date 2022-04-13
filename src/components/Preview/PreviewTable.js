import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTracks } from '../../contexts/TracksContext';

const PreviewTable = () => {
  const { tracks } = useTracks();

  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 440, minHeight:300 }}
    >
      <Table
        sx={{ minWidth: 450 }}
        aria-label="simple table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Tempo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((row, i) => (
            <TableRow
              key={`${row.name}-${i}`}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.tempo}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PreviewTable;
