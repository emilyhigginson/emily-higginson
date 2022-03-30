class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :github, :demo, :image
end
