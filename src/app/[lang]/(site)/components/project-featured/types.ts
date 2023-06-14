import { DictionaryData } from "@/dictionaries/types";

export interface ProjectFeaturedProps {
  data: DictionaryData['home']['projects']
  projects: DictionaryData['projects']['items']
}