export class Openings {
	static commonOpenings = [
		{ name: `Sicilian`, moves: `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Be7 Qf3 Qc7 O-O-O Nbd7 g4 b5` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O O-O-O Nbd7` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7 O-O	O-O Be3 Be6 Qd2 Nbd7` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e6 O-O Be7 f4 Qc7 Be3 Nc6 Kh1 O-O` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Bg5 e6 Qd2 a6 O-O-O Bd7 f4 b5 Bxf6 gxf6` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 Qc7 Bd3 Nf6 O-O Nc6 Be3 Ne5 h3 Bc5 Kh1 d6` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Nc3 Qc7 Be2 Nc6 O-O Nf6 Be3 Bb4 Na4 Be7 Nxc6 bxc6` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6 O-O Qc7 Qe2 d6 c4 g6 Nc3 Bg7` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Nf6 O-O Qc7 Nc3 Nc6 Be3 Ne5 h3 Bc5 Kh1 d6` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5 Nb3 Be7 O-O d6 c4 Nf6 Nc3 b6` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5 Nb3 Ba7 Qe2 Nc6 Be3 d6 Nc3` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 a6 Bd3 Bc5 Nb3 Ba7 O-O Nc6 Qe2 d6 Be3 Nf6` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Qd2 Nf6 O-O-O Bb4 f3 Ne5 Nb3 b5` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Nf6 Ndb5 d6 Bf4 e5 Bg5 a6 Na3 b5 Nd5 Be7` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 d6 Be2 a6 O-O Be7 f4 Qc7 Be3 Nc6 Kh1 O-O` },
		{ name: `Sicilian`, moves: `e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nf6 Nc3 Nc6 Ndb5 d6 Bf4 e5 Bg5 a6 Na3 b5 Nd5 Be7` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 Qc7 Qxg7 Rg8 Qxh7 cxd4 Ne2 Nbc6` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 O-O Bd3 Nbc6 Qh5 Ng6 Nf3 Qc7` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nc3 Nf6 Bg5 dxe4 Nxe4 Be7 Bxf6 gxf6 Nf3 f5` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3 Nc6 Be3 a6 Qd2 b5 dxc5 Bxc5` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nc3 Nf6 e5 Nfd7 f4 c5 Nf3 Nc6 Be3 cxd4 Nxd4 Bc5 Qd2 O-O O-O-O a6` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4 f6 exf6 Nxf6 Nf3 Bd6` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nd2 c5 Ne2 cxd4 cxd4 f6 exf6 Nxf6 Nf3 Bd6 O-O Qc7 Bg5 O-O` },
		{ name: `French`, moves: `e4 e6 d4 d5 Nd2 c5 Ne2 cxd4 cxd4 f6 exf6 Nxf6 O-O Bd6 Nf3 Qc7 Bg5 O-O Bh4 Nh5` },
		{ name: `French`, moves: `e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 c4 Nbd2 Na5 Be2 Bd7 O-O Ne7 Rb1 Qc7` },
		{ name: `Ruy López`, moves: `e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 Nd7 O-O Ne7 Nbd2 h6 Nb3` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 Be3 cxd4 Nxd4 Ne7 Nd2 Nbc6 N2f3 Be4 O-O Bxf3` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 O-O Nc6 c3 cxd4 cxd4 Nge7` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 e6 Nf3 Bb4 cxd5 Nxd5 Bd2 Nc6 Bd3 O-O O-O Be7` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 exd5 cxd5 c4 Nf6 Nc3 Nc6 Nf3 Bg4 cxd5 Nxd5 Qb3 Bxf3 gxf3 e6 Qxb7 Nxd4` },
		{ name: `Caro-Kann`, moves: `e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7 h5 Bh7 Bd3 Bxd3 Qxd3 e6` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O a6 Bb3 Ba7 Nbd2 O-O h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O O-O Bb3 a6 Nbd2 Ba7 h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 Bb3 a6 O-O Ba7 Nbd2 O-O h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 a6 Bb3 d6 O-O Ba7 Nbd2 O-O h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 a6 O-O d6 Bb3 Ba7 Nbd2 O-O h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 c3 d6 O-O a6 Bb3 Ba7 Nbd2 O-O h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 O-O d6 c3 a6 Bb3 Ba7 Nbd2 O-O h3 h6 Re1 Nh5` },
		{ name: `Italian`, moves: `e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6 a4 Na5 Ba2 c5 c3 Nc6 Nbd2 Be6` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 Nf3 e6 d4 cxd4 Nxd4 Qc7 Be3 a6 Qd2 Nf6 O-O-O Bb4 f3 Ne5 Nb3 b5` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 Nf3 e6 d4 cxd4 Nxd4 Qc7 Be3 a6 Bd3 Nf6 O-O Ne5 h3 Bc5 Kh1 d6` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 Nf3 e6 d4 cxd4 Nxd4 Qc7 Be2 a6 O-O Nf6 Be3 Bb4 Na4 Be7 Nxc6 bxc6` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 Nf3 g6 d4 cxd4 Nxd4 Bg7 Be3 Nf6 Bc4 O-O Bb3 d6 f3 Bd7 Qd2 Rc8` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 Be3 e6 Qd2 Rb8 Nge2 Nd4 O-O b5 Nd1 b4` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 d6 f4 e6 Nf3 Nge7 O-O O-O Be3 Nd4 e5 Nef5` },
		{ name: `Closed Sicilian`, moves: `e4 c5 Nc3 Nc6 g3 g6 Bg2 Bg7 d3 e6 Be3 d6 Qd2 Rb8 Nge2 Nd4 O-O b5 Nd1 b4` },
		{ name: `Scandinavian`, moves: `e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6 Bc4 Bf5 Bd2 e6 Qe2 Bb4 O-O-O Nbd7 a3 Bxc3` },
		{ name: `Scandinavian`, moves: `e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 Bf5 Bc4 c6 Bd2 e6 Qe2 Bb4 O-O-O Nbd7 a3 Bxc3` },
		{ name: `Scandinavian`, moves: `e4 d5 exd5 Qxd5 Nc3 Qd6 d4 Nf6 Nf3 a6 g3 Bg4 Bg2 Nc6 O-O O-O-O d5 Ne5 Bf4 Nxf3+` },
		{ name: `Pirc`, moves: `e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Bd3 Nc6 e5 dxe5 fxe5 Nh5 Be3 Bg4 Be2 f6` },
		{ name: `Pirc`, moves: `e4 d6 d4 Nf6 Nc3 g6 f4 Bg7 Nf3 O-O Bd3 Na6 O-O c5 d5 Bg4 Bc4 Nc7 h3 Bxf3` },
		{ name: `Pirc`, moves: `e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O O-O c6 a4 Nbd7 h3 Qc7 Be3 e5` },
		{ name: `Alapin Sicilian`, moves: `e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 e6 cxd4 d6 Bc4 Nc6 O-O Be7 Qe2 O-O Nc3 Nxc3` },
		{ name: `Alapin Sicilian`, moves: `e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6 Bc4 e6 O-O Be7 Qe2 O-O Nc3 Nxc3` },
		{ name: `Alapin Sicilian`, moves: `e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6 Bc4 e6 O-O Be7 Qe2 O-O Nc3 Nxc3` },
		{ name: `Alapin Sicilian`, moves: `e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 cxd4 d6 Bc4 Nb6 Bb5 dxe5 Nxe5 Bd7 Nxd7 Qxd7` },
		{ name: `Alapin Sicilian`, moves: `e4 c5 c3 Nf6 e5 Nd5 d4 cxd4 Nf3 Nc6 Bc4 Nb6 Bb3 d5 exd6 Qxd6 O-O Be6 Na3 dxc3` },
		{ name: `Alapin Sicilian`, moves: `e4 c5 c3 d5 exd5 Qxd5 d4 Nf6 Nf3 e6` },
		{ name: `Alekhine`, moves: `e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7 c4 Nb6 Nc3 O-O Be3 d5 c5 Bxf3` },
		{ name: `Alekhine`, moves: `e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6 O-O Be7 h3 Bh5 c4 Nb6 Nc3 O-O Be3 d5` },
		{ name: `Alekhine`, moves: `e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 c6 O-O Bxf3 Bxf3 dxe5 dxe5 e6 Qe2 Nd7 c4 Ne7` },
		{ name: `Alekhine`, moves: `e4 Nf6 e5 Nd5 d4 d6 Nf3 g6 Bc4 Nb6 Bb3 Bg7` },
		{ name: `Alekhine`, moves: `e4 Nf6 e5 Nd5 d4 d6 Nf3 dxe5 Nxe5 c6 Be2 Bf5 O-O Nd7 Nf3 e6 c4 N5f6 Nc3 Bd6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 Nf6 Bc4 d5 exd5 Bd6 d4 Nh5` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 g5 h4 g4 Ne5 d6 Nxg4 Nf6 Nxf6+ Qxf6 Nc3 Nc6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 g5 Bc4 Bg7 d4 d6 O-O h6 c3 Nc6 g3 Bh3` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bc4 Nxd5 O-O` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 d5 exd5 Nf6 Bb5+ c6 dxc6 Nxc6 d4 Bd6 O-O O-O` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Nf3 d6 d4 g5 h4 g4 Ng1 Bh6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Bc4 Nf6 Nc3 c6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 exf4 Bc4 d5 Bxd5 Nf6 Nc3 Bb4` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 d5 exd5 e4 d3 Nf6 dxe4 Nxe4` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 d5 exd5 exf4 Nf3 Nf6 Bc4 Nxd5 O-O` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 d5 exd5 exf4 Nf3 Nf6 Bb5+ c6 dxc6 Nxc6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 d5 exd5 c6 Nc3 exf4 Nf3 Bd6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 Bg4 Na4` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 Bc5 Nf3 d6 Nc3 Nf6 Bc4 Nc6 d3 a6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 Bc5 Nf3 d6 c3 Nf6 d4 exd4 cxd4 Bb6` },
		{ name: `King's Gambit`, moves: `e4 e5 f4 Bc5 Nf3 d6 Bc4 Nf6 Nc3 Nc6 d3 Bg4 Na4 Bb6 Nxb6 axb6` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nc3 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 c6` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nc3 Bb4 Nxc6 bxc6 Bd3 O-O O-O d5 exd5 cxd5 Bg5 c6` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Nf6 Nxc6 bxc6 e5 Qe7 Qe2 Nd5 c4 Ba6 b3 g6` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Be3 Qf6 c3 Nge7 Bc4 Ne5 Be2 Qg6 O-O d6 f3 O-O` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nxc6 Qf6 Qd2 dxc6 Nc3 Be6 Na4 Rd8 Bd3 Bd4 O-O b5` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Nxd4 Bc5 Nb3 Bb6 Nc3 Nf6 Qe2` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5 d5 Bb5 Ne4 Nxd4 Bd7 Bxc6 bxc6 O-O Bc5 f3 Ng5` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 O-O Nxe4 Re1 d5 Bxd5 Qxd5 Nc3 Qa5 Nxe4 Be6 Neg5 O-O-O` },
		{ name: `Scotch`, moves: `e4 e5 Nf3 Nc6 d4 exd4 Bc4 Nf6 e5 d5 Bb5 Ne4 Nxd4 Bd7 Bxc6 bxc6 O-O Bc5 f3 Ng5` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Ne6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3 d6 Bg5 Qe7 Re1 Nd8 d4 Ne6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 Bb5 Nd4 Ba4` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 Bb5 Nd4 Bc4 Bc5` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 c6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 g3 Bc5 Bg2 d6 d3 a6 O-O O-O` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 g3 d5 exd5 Nxd5 Bg2 Nxc3 bxc3 Bd6 Nf3 Nc6 O-O O-O` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 g3 Bc5 Bg2 Nc6 Nf3 d6 d3 a6 O-O O-O` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nf6 g3 Nc6 Nf3 Bc5 Bg2 d6 d3 a6 O-O O-O` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Ne6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 Bb5 Bb4 O-O O-O d3 Bxc3 bxc3 d6 Bg5 Qe7 Re1 Nd8 d4 Ne6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 Bb5 Nd4 Ba4` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 Bb5 Nd4 Nxd4 exd4 e5 dxc3 exf6 Qxf6 dxc3 Qe5+ Qe2 Qxe2+ Bxe2 d5` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 Bb5 Nd4 Bc4 Bc5` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 d4 exd4 Nxd4 Bb4 Nxc6 bxc6 Bd3 d5 exd5 cxd5 O-O O-O Bg5 c6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 g3 Bc5 Bg2 d6 d3 a6 O-O O-O` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Nf3 Nf6 Bb5 Bb4 O-O O-O d3 d6 Bg5 Bxc3 bxc3 Qe7 Re1 Nd8 d4 Ne6` },
		{ name: `Vienna`, moves: `e4 e5 Nc3 Nc6 Bc4 Nf6 d3 Na5 Nge2 Nxc4 dxc4` },
	];
}
