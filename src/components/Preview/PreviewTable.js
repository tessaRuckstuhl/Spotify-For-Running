import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTracks } from '../../contexts/TracksContext';
import { CircularProgress } from '@mui/material';

const PreviewTable = () => {
  const { tracks } = useTracks();
  return (
    <>
      {tracks.length > 0 ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 450 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Tempo</TableCell>
                <TableCell align="center">
                  Danceability
                </TableCell>
                <TableCell align="center">
                  Liveness
                </TableCell>
                <TableCell align="center">Energy</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tracks.map((row, i) => (
                <TableRow
                  hover
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
                  <TableCell component="th">
                    {row.artists
                      .map((artist) => artist.name)
                      .join()}
                  </TableCell>
                  <TableCell>{row.tempo}</TableCell>
                  <TableCell align="center">
                    <CircularProgress
                      color="secondary"
                      thickness={5}
                      variant="determinate"
                      value={row.danceability * 100}
                    ></CircularProgress>
                  </TableCell>
                  <TableCell align="center">
                    <CircularProgress
                      color="secondary"
                      thickness={5}
                      variant="determinate"
                      value={row.liveness * 100}
                    ></CircularProgress>
                  </TableCell>
                  <TableCell align="center">
                    <CircularProgress
                      color="secondary"
                      thickness={5}
                      variant="determinate"
                      value={row.energy * 100}
                    ></CircularProgress>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
};

export default PreviewTable;
