import { supabase } from "../supabase";

// Fetch programs from Supabase
export const fetchPrograms = async () => {
  const { data, error } = await supabase
    .from('Main')
    .select('*');

  console.log(data); // Log all retrieved data

  if (error) {
    console.error('Error fetching programs:', error);
    return [];
  }

  return data.map(program => ({
    id: program.id,
    title: program.ProgramName,
    university: program.University,
    location: program.adress,
    duration: program.Duration,
    mode: program.Timing,
    deadline: program.Deadline,
    discipline: program.Discipline,
    type: program.Type,
    rating: program.Rating,
    image: program.img,
    website: program.link,
  }));
};

async function fetchData() {
  const programs = await fetchPrograms();
  console.log(programs);
}

fetchData();
