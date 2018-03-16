const expect = require('chai').expect;

function titleCase(title){
  return title
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
      })
      .join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertical')).to.equal('Vertical');
expect(titleCase('VERTICAL')).to.equal('Vertical');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');