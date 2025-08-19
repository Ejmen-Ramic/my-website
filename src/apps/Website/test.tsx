// // /components/TopReposChart.tsx
// 'use client';
// import { useEffect, useState } from 'react';
// import {
//   Box,
//   Card,
//   CardHeader,
//   CardBody,
//   Heading,
//   Text,
//   Spinner,
// } from '@chakra-ui/react';
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend,
// } from 'recharts';
// import type { TopRepo, TopReposResponse } from '@/types/github';
// import { fetchJSON } from '@/lib/fetchers';

// type Props = { username: string; limit?: number };

// export default function TopReposChart({ username, limit = 6 }: Props) {
//   const [data, setData] = useState<TopRepo[] | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchJSON<TopReposResponse>(
//       `/api/top-repos?username=${username}&limit=${limit}`
//     )
//       .then((json) => setData(json.repos))
//       .catch((e) => setError(e.message));
//   }, [username, limit]);

//   return (
// <<<<<<< Updated upstream
//     <>
//       {/* <TestimonialContent /> */}
//       test
//       <Endorsement />
//       tests
//     </>
// =======
//     <Card rounded='2xl' shadow='md'>
//       <CardHeader>
//         <Heading size='md'>Top Repositories by Stars</Heading>
//         <Text color='fg.muted'>Public repos · sorted by stargazers</Text>
//       </CardHeader>
//       <CardBody minH='320px'>
//         {!data && !error && <Spinner />}
//         {error && <Text color='red.500'>Error: {error}</Text>}
//         {data && data.length > 0 && (
//           <Box w='100%' h='300px'>
//             <ResponsiveContainer>
//               <BarChart
//                 data={[...data].sort((a, b) => b.stars - a.stars)}
//                 layout='vertical'
//                 margin={{ top: 10, right: 24, bottom: 10, left: 80 }}
//               >
//                 <CartesianGrid strokeDasharray='3 3' />
//                 <XAxis type='number' />
//                 <YAxis type='category' dataKey='name' width={140} />
//                 <Tooltip />
//                 <Legend />
//                 <Bar
//                   dataKey='stars'
//                   name='Stars'
//                   // let Recharts decide colors unless you want language colors:
//                   // fill={item.languageColor ?? undefined}
//                 />
//                 <Bar dataKey='forks' name='Forks' />
//               </BarChart>
//             </ResponsiveContainer>
//           </Box>
//         )}
//         {data && data.length === 0 && <Text>No repositories found.</Text>}
//       </CardBody>
//     </Card>
// >>>>>>> Stashed changes
//   );
// }
