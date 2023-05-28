var documenterSearchIndex = {"docs":
[{"location":"#SPICEApplications.jl","page":"SPICEApplications.jl","title":"SPICEApplications.jl","text":"","category":"section"},{"location":"","page":"SPICEApplications.jl","title":"SPICEApplications.jl","text":"All SPICE Utility programs!","category":"page"},{"location":"","page":"SPICEApplications.jl","title":"SPICEApplications.jl","text":"warning: Warning\nMore documentation will come, but for now, SPICEApplications only has humble docstrings! For more information, take a look at the project's GitHub repository. There, and in docstrings, you'll find a recurring warning which is reiterated here: this project is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization!","category":"page"},{"location":"docstrings/#Documentation","page":"Documentation","title":"Documentation","text":"","category":"section"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"All docstrings!","category":"page"},{"location":"docstrings/","page":"Documentation","title":"Documentation","text":"Modules = [\n    SPICEApplications,\n]\nOrder = [:module, :type, :function, :constant]","category":"page"},{"location":"docstrings/#SPICEApplications.SPICEApplications","page":"Documentation","title":"SPICEApplications.SPICEApplications","text":"Call all SPICE Utilities from within Julia!\n\nwarning: Warning\nThis package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization! This is an independently written package by an astrodynamics hobbyist.\n\nExtended help\n\nREADME\n\n(Image: Tests) (Image: Docs) (Image: SciML Code Style)\n\nSPICEApplications\n\nGenerate ephemeris kernel files using NASA JPL's SPICEApplications program, all from within Julia!\n\nPlease consider all minor changes breaking until v1.0!\n\nWarningThis package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization! This is an independently written package by an astrodynamics hobbyist.\n\nInstallation\n\nChoose one of the following two lines!\n\nimport Pkg; Pkg.add(\"SPICEApplications\");\n\n]add SPICEApplications # in Julia's REPL\n\nEnvisioned Usage\n\nusing SPICEApplications\nusing Dates\nusing SPICE\nusing HorizonsEphemeris\n\ngrid = ephemeris(\"earth\", now() - Year(10), now() + Year(10), Day(1))\nkernel = SPICEApplications(grid)\nfurnsh(kernel)\n\nCredits\n\nNASA JPL developed and maintains the NAIF SPICE Toolkit, including SPICEApplications. Helge Eichhorn developed and maintains SPICE.jl, as well as the Julia wrappers around the SPICE Toolkit.\n\nLicense\n\nMIT License\n\nCopyright (c) 2023 Joe Carpinelli\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nExports\n\nbrief\nchronos\nckbrief\ncommnt\ndskbrief\ndskexp\nfrmdiff\ninspekt\nmkdsk\nmkspk\nmsopck\nsimple\nspacit\nspkdiff\nspkmerge\nstates\nsubpt\ntictoc\ntobin\ntoxfr\nversion\n\nImports\n\nBase\nCore\nDocStringExtensions\nTables\n\n\n\n\n\n","category":"module"},{"location":"docstrings/#SPICEApplications.brief-Tuple{Vararg{AbstractString}}","page":"Documentation","title":"SPICEApplications.brief","text":"brief(\n    file;\n    tabular,\n    single,\n    centers,\n    utc,\n    utcdoy,\n    etsec,\n    sec,\n    min,\n    hour,\n    day,\n    bytime,\n    bycoverage,\n    byid,\n    byname,\n    body,\n    center,\n    at,\n    from,\n    to,\n    listfile,\n    help,\n    version\n)\n\n\nBRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary SPK or binary PCK files.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.chronos-Tuple{Vararg{AbstractString}}","page":"Documentation","title":"SPICEApplications.chronos","text":"chronos(\n    file;\n    from,\n    fromtype,\n    to,\n    totype,\n    format,\n    time,\n    sc,\n    center,\n    landingtime,\n    sol1index,\n    nolabel,\n    trace,\n    help,\n    usage,\n    template\n)\n\n\nCHRONOS is a command-line program that converts between several time systems and time formats.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.ckbrief-Tuple{}","page":"Documentation","title":"SPICEApplications.ckbrief","text":"ckbrief()\n\n\nCKBRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary CK files.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.commnt-Tuple{}","page":"Documentation","title":"SPICEApplications.commnt","text":"commnt()\n\n\nCOMMNT is a command-line program that reads, adds, extracts, or deletes comments from SPICE binary kernel files.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.dskbrief-Tuple{}","page":"Documentation","title":"SPICEApplications.dskbrief","text":"dskbrief()\n\n\nDSKBRIEF is a command-line utility program that displays a summary of the spatial coverage and additional attributes of one or more binary Digital Shape Kernel (DSK) files.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.dskexp-Tuple{}","page":"Documentation","title":"SPICEApplications.dskexp","text":"dskexp()\n\n\nDSKEXP is a command-line program that exports data from DSK files to text files.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.frmdiff-Tuple{}","page":"Documentation","title":"SPICEApplications.frmdiff","text":"frmdiff()\n\n\nFRMDIFF is a program that samples orientation of a reference frame known to SPICE or computes differences between orientations of two reference frames known to SPICE, and either displays this orientation or these differences, or shows statistics about it or them.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.inspekt-Tuple{}","page":"Documentation","title":"SPICEApplications.inspekt","text":"inspekt()\n\n\nINSPEKT is an interactive program that examines the contents of an events component (ESQ) of an E-kernel.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.mkdsk-Tuple{}","page":"Documentation","title":"SPICEApplications.mkdsk","text":"mkdsk()\n\n\nMKDSK is a utility program that creates a SPICE Digital Shape Kernel (DSK) file from a text file containing shape data for an extended object.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.mkspk","page":"Documentation","title":"SPICEApplications.mkspk","text":"mkspk()\nmkspk(setup; input, output, append)\n\n\nMKSPK is a program that creates an SPK file from a text file containing trajectory information.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#SPICEApplications.msopck-Tuple{}","page":"Documentation","title":"SPICEApplications.msopck","text":"msopck()\n\n\nMSOPCK is a command-line program that converts attitude data provided in a text file as UTC, SCLK, or ET-tagged quaternions, Euler angles, or matrices, optionally accompanied by angular velocities, into a type 1, 2, or 3 SPICE C-kernel.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.spacit-Tuple{}","page":"Documentation","title":"SPICEApplications.spacit","text":"spacit()\n\n\nSPACIT is an interactive program that converts kernels in transfer format to binary format, converts binary kernels to transfer format, and summarizes the contents of binary kernels.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.spkdiff-Tuple{}","page":"Documentation","title":"SPICEApplications.spkdiff","text":"spkdiff()\n\n\nSPKDIFF provides means for comparing the trajectories of two bodies or sampling the trajectory of a single body using data from SPICE kernels.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.spkmerge-Tuple{}","page":"Documentation","title":"SPICEApplications.spkmerge","text":"spkmerge()\n\n\nSPKMERGE is a program that subsets or merges one or more SPK files into a single SPK file.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.tobin-Tuple{}","page":"Documentation","title":"SPICEApplications.tobin","text":"tobin()\n\n\nTOBIN is a command-line program that converts transfer format SPK, CK, PCK, DSK and EK files to binary format.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.toxfr-Tuple{}","page":"Documentation","title":"SPICEApplications.toxfr","text":"toxfr()\n\n\nTOXFR is a command-line program that converts binary format SPK, CK, PCK, DSK and EK files to transfer format.\n\n\n\n\n\n","category":"method"}]
}
