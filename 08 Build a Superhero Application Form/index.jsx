const { useState } = React;

export const SuperheroForm = () => {

  const [heroName, setHeroName] = useState('');
  const [realName, setRealName] = useState('');
  const [powerSource, setPowerSource] = useState('');
  const [powers, setPowers] = useState([]);

  return (
    <div className='form-wrap'>
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      <form>
        <div className='section'>
          <label>
            Hero Name
            <input
              type='text'
              value={heroName}
              onChange={e => setHeroName(e.target.value)}
            />
          </label>
          <label>
            Real Name
            <input
              type='password'
              value={realName}
              onChange={e => setRealName(e.target.value)}
            />
          </label>
        </div>
        <label className='section column'>
          How did you get your powers?
          <select>
            <option value=''>
              Select one
            </option>
           {powerSourceOptions.map(source => (
             <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  )
};