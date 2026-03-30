function getSaluto() {
  const ora = new Date().getHours();

  if (ora >= 5 && ora < 12) return 'Buongiorno';
  if (ora < 18) return 'Buon pomeriggio';
  if (ora < 22) return 'Buonasera';
  return 'Buonanotte';
}

function saluta() {
  const args = process.argv.slice(2);
  const nome = args.join(' ').trim();

  if (!nome) {
    console.log('Errore: devi fornire un nome.');
    console.log('\nUtilizzo:');
    console.log('  node saluto.js <nome>');
    process.exit(1);
  }

  const salutoTemporale = getSaluto();
  const now = new Date();

  console.log('\n' + '='.repeat(50));
  console.log(`${salutoTemporale}, ${nome}!`);
  console.log('Benvenuto nel mondo di Node.js!');
  console.log('='.repeat(50) + '\n');

  console.log(`Data: ${now.toLocaleDateString('it-IT')}`);
  console.log(`Ora: ${now.toLocaleTimeString('it-IT')}`);
  console.log(`Node.js: ${process.version}`);
  console.log(`Sistema operativo: ${process.platform}`);
  console.log();
}

saluta();
