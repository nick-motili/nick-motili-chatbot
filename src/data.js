/* eslint-disable */

const job = {
  headline: 'Full Stack Software Developer',
  essentials: {
    locations: 'denver',
    employment: EmploymentType().Permanent,
    experience: [ExperienceLevels().Junior, ExperienceLevels().Seasoned],
    startdate: new Date(),
    companysize: CompanySize().TwentyToFifty,
    teamsize: { min: 1, max: 6 },
  },
  methodology: {
    codereviews: true,
    prototyping: true,
    pairprogramming: true,
    failfast: true,
    unittests: true,
    integrationtests: true,
    buildserver: BuildServers().Codeship,
    staticcodeanalysis: CodeAnalysisTools().NotYetChosen,
    versioncontrol: VersionControlSystem().BitBucket,
    issuetracker: IssueTrackers().Jira,
    knowledgerepo: KnowledgeRepos().Confluence,
    standups: true,
    qaprotocol: true,
    freedomovertools: true,
    onecommandbuild: true,
    quickstart: true,
    commitondayone: true,
  },
  specs: {
    workload: 1.0,
    workweek: 40,
    corehours: { from: '0800', to: '1700' },
    schedule: ScheduleOptions().Flexible,
    remote: RemoteWorking().Negotiable,
    pto: PTO().Unlimited,
  },
  profile: {
    newfeatures: 50,
    clientsupport: 9,
    documentation: 10,
    maintenance: 30,
    meetings: 1,
  },
  equipment: {
    operatingsystem: [OperationSystems().MacOSX, OperationSystems().CentOS],
    computer: MachineType().Laptop,
    monitors: Monitors().Negotiable,
  },
  technologies: {
    junior: {
		    css3: Level().Good,
		    html5: Level().Good,
		    javascript: Level().Good,
		    node: Level().Good,
		    rest: Level().Good,
		    uiux: Level().Familiar,
      design: Level().Familiar,
      testing: {
        oneof: {
          junit: Level().Good,
          mocha: Level().Good,
          jasmine: Level().Good,
          selenium: Level().Good,
        },
      },
      framework: {
        oneof: {
          react: Level().Familiar,
          vue: Level().Familiar,
          angular: Level().Familiar,
        },
      },
		    boardgames: Level().Familiar,
    },
    seasoned: {
		    css3: Level().Expert,
		    html5: Level().Expert,
		    javascript: Level().Expert,
		    node: Level().Expert,
		    rest: Level().Expert,
		    uiux: Level().Good,
      design: Level().Good,
      testing: {
        oneof: {
          junit: Level().Good,
          mocha: Level().Good,
          jasmine: Level().Good,
          selenium: Level().Good,
        },
      },
      framework: {
        oneof: {
          react: Level().Familiar,
          vue: Level().Familiar,
          angular: Level().Familiar,
        },
      },
		    boardgames: Level().Familiar,
    },

  },
  bonuspoints: {
    devops: Level().Good,
    sql: Level().Good,
    mobiledevelopment: Level().Good,
    quotingbadactionmovies: Level().Expert,
  },
  other: [
    'we love technology',
    'we solve interesting problems',
  ],
  misc: {
    training: TrainingType().Informal,
    teamevents: true,
    ecopass: true,
    healthcare: true,
    dental: true,
    mobilephone: false,
    kitchen: true,
    freestuff: ['coffee (lots)', 'beverages (adult and otherwise)', 'snacks', 'bikeparking'],
  },
};

function EmploymentType() { return enumerate('Permanent', 'Temporary', 'Project'); }
function ExperienceLevels() { return enumerate('Junior', 'Seasoned', 'Lead', 'GrayBeard'); }
function CompanySize() { return enumerate('LessThanTen', 'TenToTwenty', 'TwentyToFifty', 'FiftyToTwoHundred', 'MoreThanTwoHundred'); }
function VersionControlSystem() { return enumerate('NotYetChosen', 'Git', 'BitBucket'); }
function IssueTrackers() { return enumerate('NotYetChosen', 'GitHub', 'Jira'); }
function BuildServers() { return enumerate('NotYetChosen', 'Jenkins', 'Travis', 'Codeship'); }
function CodeAnalysisTools() { return enumerate('NotYetChosen', 'ESLint'); }
function KnowledgeRepos() { return enumerate('NotYetChosen', 'GitHubWiki', 'Confluence'); }
function TravelOptions() { return enumerate('None', 'Possible', 'Plentiful'); }
function ScheduleOptions() { return enumerate('Fixed', 'Flexible'); }
function RemoteWorking() { return enumerate('No', 'Negotiable', 'Required'); }
function RelocationPackages() { return enumerate('Nonealse', 'Negotiable'); }
function OperationSystems() { return enumerate('MacOSX', 'CentOS', 'Ubuntu', 'Windows'); }
function MachineType() { return enumerate('Workstation', 'Laptop'); }
function Monitors() { return enumerate('Negotiable'); }
function Level() { return enumerate('Familiar', 'Good', 'Expert'); }
function TrainingType() { return enumerate('None', 'Informal', 'Formal', 'External'); }
function PTO() { return enumerate('Accrued', 'Unlimited'); }

// https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v = arguments; s = { all: [], keys: v }; for (i = v.length; i--;)s[v[i]] = s.all[i] = v[i]; return s; }

export default job;
