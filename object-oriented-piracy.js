// solution for https://www.codewars.com/kata/object-oriented-piracy/

/*
    Boats!
        ~~~~~            ~~~~~~~
        _~
    _~ )_)_~
    )_))_))_)               ~~~~        ~~~~~~~~
    _!__!__!_
    \______t/
                                            _~
    ~~~~~~    ~~~~~~                    _~ )_)_~
                                        )_))_))_)
                                        _!__!__!_
                                        \______t/
*/

function Ship(draft, crew) {
    this.draft = draft,
    this.crew = crew,
    this.draftPerCrewMember = 1.5,
    this.crewDraft = this.crew * this.draftPerCrewMember,
    this.bootyDraft = this.draft - this.crewDraft
  };
  
  const pirateCaptain = {
    bootyDraftThreshold: 20
  }
  
  Ship.prototype.isWorthIt = function() {
    return this.bootyDraft > pirateCaptain.bootyDraftThreshold;
  };