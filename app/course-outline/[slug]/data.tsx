import { BannerType } from "@/type/bannerType";

// Images
import programLevel1 from "@/assets/background/program-level-1.webp"
import { CourseTypeInnerDetail } from "@/type/programType";
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";

// Level 1 Start

const bannerDataLevel1: BannerType = {
  level: "level 1",
  title: {
    line1: "Course Outline of NLP Practitioner"
  },
  description: "Triple Certification Training Program",
  image: programLevel1.src
};

const LevelBenefitsTableData1Level1: LevelBenefitsTableType = {
  title: {
    line1: "Program Curriculum",
    line2: "",
  },

  bgColor: "bg-neutral-100",

  headers: [
    "NEURO LINGUISTIC PROGRAMMING",
    "TIMELINE THERAPY ™ Techniques",
    "NLP COACHING",
  ],
  dynamicColumn: "px-8 py-6 text-gray-600 hover:text-gray-500 cursor-pointer",
  points: [
    {
      content: "1. Definition of NLP",
      values: [
        "17. Prime Directives of the Unconscious Mind",
        "28. SMART Goals—Wheel of Life",
      ],
    },
    {
      content: "2. Themes of NLP",
      values: [
        "18. Elicitation of Time Line #1",
        "29. Starting the Coaching Cycle",
      ],
    },
    {
      content: "3. Ecology",
      values: [
        "19. Elicitation of Time Line #2",
        "30. Ultimate Success Formula (Coaching Method)",
      ],
    },
    {
      content: "4. NLP Communication Model",
      values: [
        "20. First Test of Elicitation",
        "31. Coaching Contract",
      ],
    },
    {
      content: "5. The Presuppositions of NLP",
      values: [
        "21. Discovering the Root Cause",
        "32. Internal Drive History",
      ],
    },
    {
      content: "6. Observing Other People (Sensory Acuity)",
      values: [
        "22. Gestalt",
        "33. Five Principles for Success",
      ],
    },
    {
      content: "7. Rapport",
      values: [
        "23. TLT for Negative Emotions (a. Anger, b. Sadness, c. Fear, d. Guilt, e. Betrayal, f. Hurt)",
        "34. State vs. Goal",
      ],
    },
    {
      content: "8. Representational System (Preference Test)",
      values: [
        "24. General Reframes of TLT",
        "35. Keys to an Achievable Outcome",
      ],
    },
    {
      content: "9. Predicates",
      values: [
        "25. TLT for Anxiety",
        "36. Well-Formed Conditions for Coaching",
      ],
    },
    {
      content: "10. Eye Patterns",
      values: [
        "26. TLT for Limiting Decisions",
        "",
      ],
    },
    {
      content: "11. Sub-Modalities (a. Like to Dislike, b. Swish Pattern)",
      values: [
        "27. The Classic Through-Time & In-Time",
        "",
      ],
    },
    {
      content: "12. Anchoring, Stacking Anchors, and Collapse Anchor",
      values: ["", ""],
    },
    {
      content:
        "13. Understanding the Conscious Use of Language (a. Milton Model, b. Meta Model, c. Hierarchy of Ideas, d. Presuppositions, e. Metaphors, f. Reframing, g. Cause & Effect, h. Meta Model III)",
      values: ["", ""],
    },
    {
      content: "14. Understanding the Physiology of Excellence",
      values: ["", ""],
    },
    {
      content: "15. Perceptual Positions",
      values: ["", ""],
    },
    {
      content: "16. Parts Integration",
      values: ["", ""],
    },
  ],
};

// Level 1 End

// Level 2 Start

const bannerDataLevel2: BannerType = {
  level: "level 2",
  title: {
    line1: "How NLP Master Practitioner Training Helps You in Your Life"
  },
  description: "Triple Certification Training Program",
  image: programLevel1.src
};

const LevelBenefitsTableData1Level2: LevelBenefitsTableType = {
  title: {
    line1: "Program Curriculum",
    line2: "",
  },

  bgColor: "bg-neutral-100",

  headers: [
    "NEURO LINGUISTIC PROGRAMMING",
    "TIMELINE THERAPY ™ Techniques",
    "NLP COACHING",
  ],
  dynamicColumn: "px-8 py-6 text-gray-600 hover:text-gray-500 cursor-pointer",

  points: [
    { content: "1. Definition of NLP (Advanced Version) a. What is it really?", values: ["17. Prime Directives of the Unconscious Mind", "28. SMART Goals—Wheel of Life"] },
    { content: "2. Themes of NLP (Advanced Detailing)", values: ["18. Elicitation of Time Line #1", "29. Starting the Coaching Cycle"] },
    { content: "3. Interventions Guide to all Challenges and Problems", values: ["19. Elicitation of Time Line #2", "30. Ultimate Success Formula (Coaching Method)"] },
    { content: "4. Prime Directives of the Unconscious Mind", values: ["20. First Test of Elicitation", "31. Coaching Contract"] },
    { content: "5. Ecology", values: ["21. Discovering the Root Cause", "32. Internal Drive History"] },
    { content: "6. RAS Reticular Activating System", values: ["22. Gestalt", "33. Five Principles for Success"] },
    { content: "7. Quantum Linguistics", values: ["23. TLT for Negative Emotions (a. Anger, b. Sadness, c. Fear, d. Guilt, e. Betrayal, f. Hurt)", "34. State vs. Goal"] },
    { content: "8. Advanced Presuppositions", values: ["24. General Reframes of TLT", "35. Keys to an Achievable Outcome"] },
    { content: "9. Cartesian Coordinates", values: ["25. TLT for Anxiety", "36. Well-Formed Conditions for Coaching"] },
    { content: "10. Quantum Linguistics", values: ["26. TLT for Limiting Decisions", ""] },
    { content: "11. Meta Model III", values: ["27. The Classic Through-Time & In-Time", ""] },
    { content: "12. Modal Operators Deeper Understanding", values: ["", ""] },
    { content: "13. Time Scramble", values: ["", ""] },
    { content: "14. Reality Intervention", values: ["", ""] },
    { content: "15. Limiting Decision Destroyer", values: ["", ""] },
    { content: "16. Going Beyond Boundaries of the Problem", values: ["", ""] },
    { content: "17. Linguistic Re-Sourcing", values: ["", ""] },
    { content: "18. De-Identification Pattern", values: ["", ""] },
    { content: "19. Values Advanced Tools and Techniques", values: ["", ""] },
    { content: "20. Massey’s Developmental Period", values: ["", ""] },
    { content: "21. Source of Values", values: ["", ""] },
    { content: "22. The Evolution of Values – Clare Graves’ System", values: ["", ""] },
    { content: "23. Three Parts to a Values Level", values: ["", ""] },
    { content: "24. 8 Values Levels", values: ["", ""] },
    { content: "25. Values Elicitation", values: ["", ""] },
    { content: "26. Values Alignment", values: ["", ""] },
    { content: "27. Identification and Correction of Possible Conflicts in Values Hierarchy", values: ["", ""] },
    { content: "28. Changing Values", values: ["", ""] },
    { content: "29. Corporate Values Alignment", values: ["", ""] },
    { content: "30. Advanced Values & Beliefs", values: ["", ""] },
    { content: "31. Basic Meta Programs MBTI", values: ["", ""] },
    { content: "32. Complex META Programs MPVI™ Training", values: ["", ""] },
    { content: "33. Advanced NLP Patterns (Modeling Technology)", values: ["", ""] },
    { content: "34. Advanced Sub Modality Work", values: ["", ""] },
    { content: "35. Reframing Advanced Version: 16 Sleight of Mouth Patterns", values: ["", ""] },
    { content: "36. Logical Levels of Therapy for Phobia Cure", values: ["", ""] },
    { content: "37. Advanced Strategy Work", values: ["", ""] },
    { content: "38. Spelling Strategies", values: ["", ""] },
    { content: "39. Buying Strategies", values: ["", ""] },
    { content: "40. Motivation Strategies", values: ["", ""] },
    { content: "41. Learning Strategies", values: ["", ""] },
    { content: "42. Negotiation Strategies", values: ["", ""] },
    { content: "43. Relationship Strategies", values: ["", ""] },
    { content: "44. Chaining Anchors", values: ["", ""] },
    { content: "45. PHQ – Detailed Personal History Questionnaire", values: ["", ""] },
    { content: "46. Working with Limiting Beliefs and 13 Steps to Breaking Limiting Beliefs", values: ["", ""] }
  ],
};

// Level 2 End

// Level 3 Start

const bannerDataLevel3: BannerType = {
  level: "level 3",
  title: {
    line1: "COURSE OUTLINE OF ADVANCED HYPNOTHERAPY & INTERVENTIONIST TRAINING"
  },
  description: "Triple Certification Training Program",
  image: programLevel1.src
};

const LevelBenefitsTableData1Level3: LevelBenefitsTableType = {
  title: {
    line1: "Advanced Hypnotherapy & Interventionist Training",
    line2: "",
  },

  bgColor: "bg-neutral-100",

  headers: [
  ],
  dynamicColumn: "px-8 py-6 text-gray-600 hover:text-gray-500 cursor-pointer",

  points: [
    { content: "1. History of Hypnosis", values: ["36. The Elman Pre-Talk and Requisites for Hypnosis"] },
    { content: "2. Working with Abreaction and Secondary Gains", values: ["37. Dave Elman Induction – I"] },
    { content: "3. Mastering Conversational Hypnosis", values: ["38. Dave Elman Induction – II"] },
    { content: "4. Fundamentals of Ericksonian Hypnosis", values: ["39. Basic to Advance Convincers"] },
    { content: "5. Hypnotic Patterns", values: ["40. Working with Imagination and Improving it with Hypnosis"] },
    { content: "6. Direct & Indirect Suggestions", values: ["41. R.E.D +"] },
    { content: "7. Embedded Commands", values: ["42. The Krasner Method of Hypnosis"] },
    { content: "8. Truism about Sensations", values: ["43. Pain Control (Analgesia / Anesthesia)"] },
    { content: "9. Truism Utilizing Time", values: ["44. Pain Control Format"] },
    { content: "10. Not Knowing, Not Doing", values: ["45. Universal Script – Overeating, Nail Biting, Bad Habits"] },
    { content: "11. Open-Ended Suggestions", values: ["46. High Road to Success Script"] },
    { content: "12. Covering all possibilities of Response", values: ["47. Water off a Duck’s Back (Protective Script)"] },
    { content: "13. To Focus Attention", values: ["48. Group Hypnosis Induction Script"] },
    { content: "14. Facilitating Internal Change", values: ["49. High Road to Success & Becoming Lean & Healthy"] },
    { content: "15. Compound Suggestions", values: ["50. Weight Loss Universal Pattern"] },
    { content: "16. Implication and Implied Directives", values: ["51. Pre-Qualifying Techniques for Smokers & Non-Smoker Script"] },
    { content: "17. Bind and Double Binds", values: ["52. Advance Script for Smoking and Weight Loss"] },
    { content: "18. Multi-Level Communication", values: ["53. Self-Hypnosis using 7 PATH"] },
    { content: "19. Pre-Induction and Preparation for Trance", values: ["54. 9 Recognitions (DELTA)"] },
    { content: "20. Hypnotic Contract", values: ["55. The Flow of Perception"] },
    { content: "21. Stages of Hypnosis", values: ["56. Past Life Regression"] },
    { content: "22. Suggestibility Test", values: ["57. Future Regression"] },
    { content: "23. Ericksonian Induction – 1", values: ["58. Inner Child Work"] },
    { content: "24. Ericksonian Induction – 2", values: ["59. Time Tunneling Technique"] },
    { content: "25. General Pendulum Paradigm", values: ["60. Working with Forgiveness of Self and Others"] },
    { content: "26. Working with Pendulum Chart", values: ["61. Understanding Feeling and Emotions (Advance)"] },
    { content: "27. & Analog Pendulum Chart", values: ["62. Ernst Rossi Hypnotic Technic and Induction"] },
    { content: "28. Deepening Techniques (Direct and Indirect)", values: ["63. Free Style Hypnosis Methods"] },
    { content: "29. Multiple Embedded Metaphors", values: ["64. Many more Scripts and Inductions / Patterns for in-person & online"] },
    { content: "30. Contraindications for Hypnosis", values: ["65. Achieving Breakthrough & Mastery"] },
    { content: "31. Post-Hypnotic Suggestions and Direct Suggestions", values: ["66. Over 500 Hypnotic Scripts as a bonus"] },
    { content: "32. A Direct – Authoritarian Approach (George Estabrooks)", values: ["67. Estabrook’s Induction"] },
    { content: "33. Progressive Test Induction (Dr. Tad James)", values: [""] },
    { content: "34. Using Ericksonian Indirect Suggestion and Direct Authoritarian", values: [""] },
    { content: "35. Elman Hypnotic Inductions", values: [""] },
  ],
};

export const courseInnerDetail: CourseTypeInnerDetail[] = [
  {
    slug: "nlp-practitioner",
    BannerData: bannerDataLevel1,
    LevelBenefitsTableData1: LevelBenefitsTableData1Level1,
  },
  {
    slug: "nlp-master-practitioner",
    BannerData: bannerDataLevel2,
    LevelBenefitsTableData1: LevelBenefitsTableData1Level2,
  },
  {
    slug: "advanced-hypnotherapy-interventionis",
    BannerData: bannerDataLevel3,
    LevelBenefitsTableData1: LevelBenefitsTableData1Level3,
  }
];